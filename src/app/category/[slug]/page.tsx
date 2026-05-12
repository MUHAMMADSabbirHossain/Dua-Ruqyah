"use client";

import CategoryNavigateBar from "@/components/feature/catalog/CategoryNavigateBar";
import DuaContent from "@/components/feature/DuaContent";
import Header from "@/components/layout/Header";
import NavigateVar from "@/components/layout/NavigateVar";
import RightSidebar from "@/components/layout/RightSidebar";
import {
  CatalogCategoriesApiResponse,
  CatalogCategory,
  CatalogSubCategory,
} from "@/types/catalog";
import { DuasApiResponse } from "@/types/dua";
import { Poppins } from "next/font/google";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CategoryPage() {
  const categorySlug = useParams().slug as string;

  const router = useRouter();

  const [categoryCatalogLoading, setCategoryCatalogLoading] =
    useState<boolean>(false);
  const [categoryCatalogError, setCategoryCatalogError] = useState<{
    message: string;
    status: boolean;
  }>({
    message: "",
    status: false,
  });
  const [duaLoading, setDuaLoading] = useState<boolean>(false);
  const [duaError, setDuaError] = useState<{
    message: string;
    status: boolean;
  }>({
    message: "",
    status: false,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [arabicFontSize, setArabicFontSize] = useState<number>(24);
  const [translationFontSize, setTranslationFontSize] = useState<number>(18);
  const [catelogCategories, setCatelogCategories] = useState<
    CatalogCategoriesApiResponse["data"]
  >([]);
  const [selectedExpandingCategory, setSelectedExpandingCategory] =
    useState<number>(121);
  const [selectedExpandingSubCategory, setSelectedExpandingSubCategory] =
    useState<number>(160);
  const [subCategorySlug, setSubCategorySlug] = useState<string>("");

  const [duaContent, setDuaContent] = useState<DuasApiResponse["data"]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const duaRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleToggleMobileMenu = (open?: boolean) => {
    setIsMobileMenuOpen((prev) => (open === undefined ? !prev : open));
  };

  useEffect(() => {
    setCategoryCatalogLoading(true);
    setCategoryCatalogError({
      message: "",
      status: false,
    });

    // Handle API call to get catelog categories and store in catelogCategories
    async function fetchData() {
      try {
        const result = await fetch(`/api/v1/catelog/category`);
        const data = await result.json();

        if (
          data?.status === 200 &&
          data?.success === true &&
          data?.data?.length > 0
        ) {
          setCatelogCategories(data?.data || []);

          // Find the category by slug and set the subcategory slug to the first subcategory
          const currentCategory = data?.data.find(
            (item: CatalogCategory) => item?.slug === categorySlug,
          );
          if (currentCategory && currentCategory?.subcategories?.length > 0) {
            setSubCategorySlug(currentCategory.subcategories[0].slug);
            setSelectedExpandingSubCategory(
              currentCategory.subcategories[0].id,
            );
            setSelectedExpandingCategory(currentCategory.id);
          }
        }
      } catch (err) {
        const error = err as Error;

        setCategoryCatalogError({
          message: error.message || "Failed to load categories",
          status: true,
        });
      } finally {
        setCategoryCatalogLoading(false);
      }
    }
    fetchData();
  }, []);

  // Handle side bar collapse categories and sub categoriess
  useEffect(() => {
    if (categorySlug && categorySlug.length > 0) {
      const currentCategory: CatalogCategory | undefined =
        catelogCategories.find((c: CatalogCategory) => {
          // console.log(c);

          return c?.slug === categorySlug;
        });

      // Level 1 - Expand current category
      if (currentCategory && currentCategory?.subcategories?.length > 0) {
        setSelectedExpandingCategory(currentCategory.id);

        // Level 2 - Expand first sub category if it has sub_subcategories
        const currentSubCategory: CatalogSubCategory | undefined =
          currentCategory?.subcategories?.find(
            (subCategory: CatalogSubCategory) => {
              return (
                subCategory?.sub_subcategories &&
                subCategory?.sub_subcategories?.length > 0
              );
            },
          );

        if (
          currentSubCategory &&
          currentSubCategory?.sub_subcategories?.length > 0
        ) {
          setSelectedExpandingSubCategory(currentSubCategory.id);
          setSubCategorySlug(currentSubCategory?.slug);
        }
      }
    }

    (async () => {
      try {
        setDuaLoading(true);
        const apiUrl = `/api/v1/duas?${
          subCategorySlug
            ? "sub_category_slug=" + subCategorySlug
            : "category_slug=" + categorySlug
        }`;

        const result = await fetch(apiUrl);
        const data = await result.json();
        // console.log(data?.count);

        if (
          data?.status === 200 &&
          data?.success === true &&
          data?.data?.length > 0
        ) {
          setDuaContent(data?.data);
        }
      } catch (err) {
        console.log(err);

        const error = err as Error;

        setDuaError({
          message: error.message || "Failed to load duas",
          status: true,
        });
      } finally {
        setDuaLoading(false);
      }
    })();
  }, [
    categorySlug,
    catelogCategories,
    selectedExpandingCategory,
    selectedExpandingSubCategory,
    subCategorySlug,
  ]);

  const filteredCategories: CatalogCategoriesApiResponse["data"] =
    catelogCategories.filter((category: CatalogCategory) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  return (
    <div className="bg-[#FBFFFB] min-h-screen">
      {/* Navigation Bar - Destop left bar - Mobile bottom bar  */}
      <NavigateVar />

      <main className="pb-16 lg:pb-0 lg:ml-[68px]">
        <Header
          poppinsFont={poppinsFont}
          isMobileMenuOpen={isMobileMenuOpen}
          handleToggleMobileMenu={handleToggleMobileMenu}
          categoryCatalogLoading={categoryCatalogLoading}
          categoryCatalogError={categoryCatalogError}
          router={router}
          selectedExpandingCategory={selectedExpandingCategory}
          selectedExpandingSubCategory={selectedExpandingSubCategory}
          setSelectedExpandingSubCategory={setSelectedExpandingSubCategory}
          setSubCategorySlug={setSubCategorySlug}
          duaRef={duaRef}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredCategories={filteredCategories}
        />

        <div className="flex h-[calc(100vh-64px-64px)] lg:h-[calc(100vh-64px)]">
          {/* Category Catalog Navigate Bar - Desktop Only */}
          <div className="hidden lg:block overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[#417360] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#2c5c4a]">
            <CategoryNavigateBar
              categoryCatalogLoading={categoryCatalogLoading}
              categoryCatalogError={categoryCatalogError}
              router={router}
              selectedExpandingCategory={selectedExpandingCategory}
              selectedExpandingSubCategory={selectedExpandingSubCategory}
              setSelectedExpandingSubCategory={setSelectedExpandingSubCategory}
              setSubCategorySlug={setSubCategorySlug}
              duaRef={duaRef}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filteredCategories={filteredCategories}
            />
          </div>

          {/* Dua Content */}
          <div className="flex-1 overflow-y-scroll md:px-2 lg:px-0 bg-[#F9FFFB] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[#417360] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#2c5c4a]">
            <DuaContent
              duaContent={duaContent}
              duaRef={duaRef}
              categorySlug={categorySlug}
              duaLoading={duaLoading}
              duaError={duaError}
            />
          </div>

          {/* Right Sidebar - Only Desktop View (2xl or 1536px and above)*/}
          <div className="hidden 2xl:block">
            <RightSidebar
              arabicFontSize={arabicFontSize}
              setArabicFontSize={setArabicFontSize}
              translationFontSize={translationFontSize}
              setTranslationFontSize={setTranslationFontSize}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default CategoryPage;
