import svgIcons from "../ui/icon/svgIcons";

function DuaContent({
  duaContent,
  duaRef,
  categorySlug,
}: {
  duaContent: any[];
  duaRef: any;
  categorySlug: string;
}) {
  return (
    <>
      <div className="pb-20 lg:pb-0 bg-[#F7FFFB]">
        {/* Content */}
        <div className="bg-[#F9FFFB]">
          {/* Catrgory Title */}
          <div className="text-[rgba(64,114,95,1)] bg-[#EEF6EB] px-2 py-3 flex items-center gap-2 sm:px-4 sm:py-4 sm:gap-2.5 lg:pl-[68px] lg:pr-0 lg:py-6">
            <span className="text-xs sm:text-sm lg:text-base font-semibold">
              Category:{" "}
            </span>
            <span className="text-xs sm:text-sm lg:text-base">
              {categorySlug}
            </span>
          </div>

          {/* Loading */}

          {/* Error Message */}

          <div className="px-2 sm:px-4 lg:px-[68px]">
            {duaContent.length > 0 ? (
              duaContent.map((dua: any) => (
                <div
                  key={`${dua?.id}-${dua?.subcategory_slug}`}
                  ref={(e) => {
                    if (e) {
                      duaRef.current[dua?.id] = e;
                    }
                  }}
                  className="py-4 border-b border-[#E1EBE1] px-2 flex flex-col gap-6 scroll-mt-20
                            sm:py-6 sm:gap-8
                            lg:py-[30px] lg:pl-[18px] lg:pr-0 lg:gap-[50px]"
                >
                  <div>
                    {/* Dua Title and Icon */}
                    <div className="flex items-start gap-2 sm:gap-3 lg:items-center lg:gap-4">
                      <div className="">{svgIcons?.duaTitleIcon}</div>
                      <h3 className="text-xs text-[#417360] font-semibold leading-5 sm:text-sm sm:leading-6 lg:text-base lg:leading-normal">
                        {dua?.title}
                      </h3>
                    </div>

                    {/* Instruction - optional */}
                    {dua?.instruction && (
                      <p className="text-xs leading-5 text-[#282E29] sm:text-sm sm:leading-6 lg:text-base lg:leading-8">
                        {dua?.instruction}
                      </p>
                    )}

                    {/* Arabic Text + Transliteration + Translation */}
                    <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
                      <p
                        className="text-lg leading-7 text-right text-[#282E29] sm:text-xl sm:leading-8 lg:text-[28px] lg:leading-[49px] wrap-break-word"
                        dir="rtl"
                      >
                        {dua?.arabic_text}
                      </p>

                      {(dua?.transliteration || dua?.translation) && (
                        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
                          {dua?.transliteration && (
                            <p className="text-xs leading-5 font-normal text-[#7C827D] sm:leading-6 sm:text-sm lg:text-base lg:leading-8 ">
                              {dua?.transliteration}
                            </p>
                          )}

                          {dua?.translation && (
                            <div className="flex  flex-col gap-1 sm:gap-2">
                              <p className="text-xs text-[#282E29] leading-5 font-semibold  sm:text-sm lg:text-base lg:leading-[26px]">
                                Translation:
                              </p>
                              <p
                                className="text-xs font-normal leading-5 text-black sm:text-sm 
                                        sm:leading-6 lg:text-base lg:leading-[26px]"
                              >
                                {dua?.translation}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Reference and Action Bar */}
                  <div className="flex flex-col justify-between items-start gap-4 lg:flex-row lg:items-center lg:gap-9">
                    {/* Reference */}
                    <div className="px-3 py-2 lg:px-4">
                      <div className="flex flex-col ">
                        <span className="text-[#7C827D] text-xs">
                          Reference
                        </span>
                        <span className="text-[#282E29] text-xs">
                          {dua?.reference}
                        </span>
                      </div>
                    </div>

                    {/* Actions Bar */}
                    <div>
                      <div className="flex items-center gap-2 lg:gap-4">
                        {/* Copy */}
                        <button className="" title="Copy dua text">
                          {svgIcons?.playIcon}
                        </button>

                        {/* Bookmark */}
                        <button className="" title="Bookmark">
                          {svgIcons?.bookmarkIcon}
                        </button>

                        {/* Play */}
                        <button className="" title="Play audio">
                          {svgIcons?.audioPlayIcon}
                        </button>

                        {/* Share - Hidden on mobile */}
                        <button className="" title="Share">
                          {svgIcons?.shareIcon}
                        </button>

                        {/* More/Report - Hidden on mobile */}
                        <button className="" title="More">
                          {svgIcons?.moreReportIcon}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <div>No dua found for this category</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DuaContent;
