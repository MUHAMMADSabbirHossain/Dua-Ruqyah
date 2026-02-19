import { renderIcon } from "@/utils/imageHelper";
import { Poppins } from "next/font/google";
import { FC } from "react";

const getCategories = async () => {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/sub-categories-with-category`,
    );
    const data = await res.json();
    return data || [];
  } catch (error) {
    return [];
  }
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const CategorySlugPage: FC<{ params: { categorySlug: string } }> = async ({
  params,
}) => {
  const { categorySlug } = await params;
  // console.log("categorySlug: ", categorySlug);

  const categories = (await getCategories()) || [];
  // console.log("categories: ", categories);s

  return (
    <div className="flex h-[calc(100vh-64px-64px)] lg:h-[calc(100vh-64px)] overflow-hidden">
      <div className="flex-shrink-0 hidden lg:block">
        {/* Categories List */}
        <section
          className={`${poppins.className} w-[345px] h-full bg-[#F7FFFB] border-r border-[#E1EBE1] flex flex-col overflow-hidden`}
        >
          {/* Categories List */}
          <ul className="flex-1 overflow-y-auto px-4 pr-[57px] py-2 space-y-2 scrollbar-thin">
            {categories?.length > 0 ? (
              categories.map((category: any) => (
                <li key={category.id} className="flex flex-col gap-6">
                  <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50/30 rounded-lg group">
                    <div className="flex items-center gap-[18px] flex-1 cursor-pointer">
                      <div className="w-11 h-11 rounded-[15px] flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {renderIcon(category?.cat_icon)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#282E29] font-medium text-[14px]">
                          {category.cat_name_en}
                        </h3>
                        <div className="flex items-center gap-2 text-[#7C827D] text-[12px]">
                          <span>
                            {category?.sub_category?.length} Subcategories
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subcategories List */}
                  <div className="ml-[26px] relative">
                    <div className="absolute mt-[12px] left-0 top-0 bottom-0 w-px border-l-2 border-dashed border-[#C5D1C7]"></div>

                    <ul>
                      {category?.sub_category?.length > 0 ? (
                        category?.sub_category?.map((subCategory: any) => (
                          <li
                            key={subCategory.id}
                            className="relative pl-6 py-2 hover:bg-gray-50/50 rounded cursor-pointer transition-all group"
                          >
                            <div className="absolute left-0 top-1/2 w-4 h-px border-t-2 border-dashed border-[#E1EBE1]"></div>
                            {subCategory?.subcat_name_en ? (
                              <div className="flex items-center gap-2">
                                <h4
                                  className={`text-[14px] font-medium leading-relaxed transition-colors text-[#282E29]`}
                                >
                                  {subCategory?.subcat_name_en}
                                </h4>
                              </div>
                            ) : (
                              <h4 className="text-[#282E29] text-[14px] font-medium leading-relaxed">
                                {subCategory?.subcat_name_en}
                              </h4>
                            )}
                          </li>
                        ))
                      ) : (
                        <p>No sub-categories found.</p>
                      )}
                    </ul>
                  </div>
                </li>
              ))
            ) : (
              <div>No categories found.</div>
            )}
          </ul>
        </section>
      </div>

      {/* Duas List */}
      {/* <section>
        <ul className="space-y-10">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </section> */}
    </div>
  );
};

export default CategorySlugPage;
