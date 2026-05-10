import CategorySearchQuery from "@/components/form/CategorySearchQuery";
import svgIcons from "@/components/ui/icon/svgIcons";
import { renderIcon } from "@/utility/imageHelper";
import Image from "next/image";

function CategoryNavigateBar({
  loading,
  error,
  router,
  selectedExpandingCategory,
  setSelectedExpandingSubCategory,
  selectedExpandingSubCategory,
  setSubCategorySlug,
  duaRef,
  searchQuery,
  setSearchQuery,
  filteredCategories,
}: {
  loading: boolean;
  error: { status: boolean; message: string };
  router: any;
  selectedExpandingCategory: number;
  setSelectedExpandingSubCategory: (id: number) => void;
  selectedExpandingSubCategory: number;
  setSubCategorySlug: (slug: string) => void;
  duaRef: any;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredCategories: any;
}) {
  return (
    <>
      {/* Category Catelog Section - Desktop Only*/}
      <div className="w-[345px] h-full bg-[#F7FFFB] border-[#E1EBE1]">
        {/* Search Bar */}
        <CategorySearchQuery
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Category - Category */}
        <div className="px-4 py-2 space-y-2">
          {/* Loading - if categories api is loading. */}
          {loading && (
            <div className="text-sm text-[#7C827D] px-3 py-2 flex items-center">
              {svgIcons?.loadingIcon}
              Loading Categories...
            </div>
          )}

          {/* Error Message - If categories api is failed.*/}
          {error.status === true && (
            <div className="text-sm text-red-600 px-3 py-2">
              {error.message || "Failed to load categories"}
            </div>
          )}

          {/* Categories Catalog - If load successfully */}
          {filteredCategories.map((catelogCategory: any) => (
            <div key={catelogCategory?.id} className="">
              {/* Level 1 */}
              <div className=" py-3 px-4 hover:bg-gray-50/30 rounded-lg">
                <div
                  className="flex items-center gap-[18px] cursor-pointer flex-1"
                  onClick={(e) => {
                    router.push(`/category/${catelogCategory?.slug}`);
                  }}
                >
                  <div className="">
                    {renderIcon(catelogCategory?.icon_path)}
                  </div>

                  <div>
                    <h3 className="text-[#282E29] text-[14px] font-medium">
                      {catelogCategory?.name}
                    </h3>

                    <div className="text-[#7C827D] text-[12px]">
                      <span>
                        {catelogCategory?.subcategories?.length} Subcategories
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expand/Collapse Button */}
              </div>

              {/* Level 2 - Sub categories */}
              {selectedExpandingCategory === catelogCategory?.id && (
                <div className="ml-[26px] relative">
                  {/* Dashed border */}
                  <div className="absolute mt-[12px] left-0 top-0 bottom-0 w-px border-l-2 border-dashed border-[#C5D1C7]"></div>

                  {catelogCategory?.subcategories.map((subCategory: any) => (
                    <div key={subCategory?.id}>
                      <div
                        onClick={() => {
                          setSelectedExpandingSubCategory(subCategory?.id);
                          setSubCategorySlug(subCategory?.slug);
                        }}
                        className="relative pl-6 py-2 cursor-pointer"
                      >
                        {/* Connection dash */}
                        <div className="absolute top-1/2 left-0 w-4 h-px border-t-2 border-dashed border-[#E1EBE1]"></div>

                        <div className="text-[14px] font-medium text-[#282E29] leading-relaxed">
                          {subCategory?.name}
                        </div>
                      </div>

                      {/* Level 3 - Sub sub categories */}
                      {selectedExpandingSubCategory === subCategory?.id && (
                        <div className="ml-4 pl-6 relative">
                          {subCategory?.sub_subcategories.map(
                            (subSubCategory: any) => (
                              <div
                                key={subSubCategory?.id}
                                onClick={() => {
                                  duaRef.current[
                                    subSubCategory?.dua?.id
                                  ]?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start", // Align to the top of the container
                                  });
                                }}
                                className="flex items-start gap-3 py-1"
                              >
                                {/* To right arrow Icon */}
                                <div className="mt-1">
                                  {svgIcons?.catelogToRightIcon}
                                </div>

                                <p className="text-sm pt-0.5 text-[#252F29]">
                                  {subSubCategory?.name}
                                </p>
                              </div>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryNavigateBar;
