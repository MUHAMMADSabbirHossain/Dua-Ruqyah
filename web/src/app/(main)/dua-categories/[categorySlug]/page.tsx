import { renderIcon } from "@/utils/imageHelper";
import { Poppins } from "next/font/google";
import { FC } from "react";

const getCategories = async () => {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/catalog`);
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
  // console.log("categories: ", categories);

  return (
    <div className="flex h-[calc(100vh-64px-64px)] lg:h-[calc(100vh-64px)] overflow-hidden">
      <div className="flex-shrink-0 hidden lg:block">
        {/* Categories List */}
        <section
          className={`${poppins.className} w-[345px] h-full bg-[#F7FFFB] border-r border-[#E1EBE1] flex flex-col overflow-hidden`}
        >
          {/* Categories List */}
          <ul className="flex-1 overflow-y-auto px-4 pr-[57px] py-2 space-y-2  [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[#417360] [&::-webkit-scrollbar-thumb]:rounded-full">
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

                            <div className="ml-4 pl-6 relative">
                              {/* Vertical dashed line */}
                              <div className="absolute left-0 top-0 bottom-0 w-px border-dashed border-[#E1EBE1]"></div>

                              {subCategory?.duas?.map((dua: any, i: number) => (
                                <div
                                  key={i}
                                  className="relative flex items-start gap-3 py-1 group cursor-pointer hover:bg-gray-50/30 rounded px-2 -mx-2"
                                >
                                  {/* Arrow icon */}
                                  <div className="flex-shrink-0 mt-1">
                                    <svg
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        opacity="0.6"
                                        d="M4.93306 7C4.93306 6.72386 4.7092 6.5 4.43306 6.5C4.15692 6.5 3.93306 6.72386 3.93306 7H4.43306H4.93306ZM20.4331 17L15.4331 14.1132V19.8868L20.4331 17ZM4.02178 8.37077C4.0575 8.64459 4.30843 8.83761 4.58226 8.80189C4.85608 8.76617 5.0491 8.51524 5.01338 8.24142L4.51758 8.30609L4.02178 8.37077ZM5.65373 10.6364C5.54795 10.3813 5.25542 10.2602 5.00034 10.366C4.74526 10.4718 4.62422 10.7643 4.73 11.0194L5.19187 10.8279L5.65373 10.6364ZM6.10261 13.3925C6.27087 13.6115 6.58477 13.6526 6.80373 13.4843C7.02269 13.316 7.06379 13.0021 6.89553 12.7832L6.49907 13.0878L6.10261 13.3925ZM8.64988 14.5375C8.43092 14.3693 8.11702 14.4104 7.94876 14.6293C7.7805 14.8483 7.8216 15.1622 8.04056 15.3305L8.34522 14.934L8.64988 14.5375ZM10.4137 16.7031C10.6687 16.8088 10.9613 16.6878 11.067 16.4327C11.1728 16.1776 11.0518 15.8851 10.7967 15.7793L10.6052 16.2412L10.4137 16.7031ZM13.1916 16.4197C12.9178 16.384 12.6669 16.577 12.6312 16.8508C12.5955 17.1246 12.7885 17.3756 13.0623 17.4113L13.127 16.9155L13.1916 16.4197ZM15.9331 17.5C16.2092 17.5 16.4331 17.2761 16.4331 17C16.4331 16.7239 16.2092 16.5 15.9331 16.5V17V17.5ZM18.9331 16.5C18.6569 16.5 18.4331 16.7239 18.4331 17C18.4331 17.2761 18.6569 17.5 18.9331 17.5V17V16.5ZM4.43306 7H3.93306C3.93306 7.46435 3.96323 7.92191 4.02178 8.37077L4.51758 8.30609L5.01338 8.24142C4.96041 7.83534 4.93306 7.42099 4.93306 7H4.43306ZM5.19187 10.8279L4.73 11.0194C5.0841 11.8733 5.5475 12.6701 6.10261 13.3925L6.49907 13.0878L6.89553 12.7832C6.39305 12.1293 5.97389 11.4084 5.65373 10.6364L5.19187 10.8279ZM8.34522 14.934L8.04056 15.3305C8.76292 15.8856 9.55976 16.349 10.4137 16.7031L10.6052 16.2412L10.7967 15.7793C10.0247 15.4592 9.30375 15.04 8.64988 14.5375L8.34522 14.934ZM13.127 16.9155L13.0623 17.4113C13.5112 17.4698 13.9687 17.5 14.4331 17.5V17V16.5C14.0121 16.5 13.5977 16.4726 13.1916 16.4197L13.127 16.9155ZM14.4331 17V17.5H15.9331V17V16.5H14.4331V17Z"
                                        fill="#417360"
                                      />
                                    </svg>
                                  </div>

                                  <p
                                    className={`${poppins.className} text-[#252F29] text-[14px] group-hover:text-[#417360] leading-relaxed pt-0.5`}
                                  >
                                    {dua?.dua_name_en}
                                  </p>
                                </div>
                              ))}
                            </div>
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
