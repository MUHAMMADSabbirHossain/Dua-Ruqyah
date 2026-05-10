import Image from "next/image";
import svgIcons from "../ui/icon/svgIcons";
import { ReactElement } from "react";

function RightSidebar({
  arabicFontSize,
  setArabicFontSize,
  translationFontSize,
  setTranslationFontSize,
}: {
  arabicFontSize: number;
  setArabicFontSize: (value: number) => void;
  translationFontSize: number;
  setTranslationFontSize: (value: number) => void;
}): ReactElement {
  return (
    <>
      <div
        className={`bg-[#F7FFFB] h-[calc(100vh-64px)] w-[352px] pt-[14px] border-l border-[#E1EBE1]`}
      >
        {/* Font Settings Section */}
        <div className="px-6">
          <div className="flex items-center gap-4 py-[10px]">
            <div className="ml-2">
              <Image
                src="/icons/font-settings-icon.svg"
                alt="Font Settings"
                width={34}
                height={34}
              />
            </div>

            <h3 className="text-[#417360] text-sm font-semibold flex-1">
              Font Settings
            </h3>

            <div className="mr-2">
              <Image
                src="/icons/arrow-up-icon.svg"
                alt="Up Arrow Icon"
                width={14}
                height={14}
              />
            </div>
          </div>

          <div className="mt-6 space-y-[22px]">
            {/* Arabic Font Size */}
            <div className="pb-2 px-2">
              <div className="px-2 mb-3">
                <label
                  htmlFor=""
                  className="text-[#282E29] text-sm font-medium"
                >
                  Arabic Font Size
                </label>
              </div>

              <div className="flex items-center gap-4 px-2">
                <div className="flex-1">
                  <input
                    type="range"
                    name=""
                    id=""
                    value={arabicFontSize}
                    onChange={(e) => setArabicFontSize(Number(e.target.value))}
                    min={12}
                    max={40}
                    step={1}
                    style={{
                      background: `linear-gradient(90deg, #417360 ${((arabicFontSize - 12) / 28) * 100}%, #e5e7eb ${((arabicFontSize - 12) / 28) * 100}%)`,
                    }}
                    className="w-full h-2 appearance-none cursor-pointer accent-[#417360] rounded-full"
                  />
                </div>
                <span className="text-[#417360] text-sm font-semibold">
                  {arabicFontSize}
                </span>
              </div>
            </div>

            {/* Translation Font Size */}
            <div className="pb-2 px-2">
              <div className="px-2 mb-3">
                <label
                  htmlFor=""
                  className="text-[#282E29] text-sm font-medium"
                >
                  Translation Font Size
                </label>
              </div>

              <div className="flex items-center gap-4 px-2">
                <div className="flex-1">
                  <input
                    type="range"
                    name=""
                    id=""
                    value={translationFontSize}
                    onChange={(e) =>
                      setTranslationFontSize(Number(e.target.value))
                    }
                    min={12}
                    max={40}
                    step={1}
                    style={{
                      background: `linear-gradient(90deg, #417360 ${((translationFontSize - 12) / 28) * 100}%, #e5e7eb ${((translationFontSize - 12) / 28) * 100}%)`,
                    }}
                    className="w-full h-2 appearance-none cursor-pointer accent-[#417360] rounded-full"
                  />
                </div>
                <span className="text-[#417360] text-sm font-semibold">
                  {translationFontSize}
                </span>
              </div>
            </div>

            {/* Arabic Script & Font Face */}
            <div className="pb-2">
              <div className="px-2 mb-3">
                <label
                  htmlFor=""
                  className="text-[#282E29] text-sm font-medium"
                >
                  Translation Font Size
                </label>
              </div>
              <div className="mx-2">
                <div className="bg-[#EBF9EC] rounded-lg border border-[#E2E8F0] py-[13px] px-4 flex items-center justify-between cursor-pointer hover:bg-[#F8FAFC] transition-colors duration-300 ease-linear">
                  <span className="text-[#282E29] text-sm">Uthma</span>
                  {svgIcons.rightArrowIcon}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View Settings Section */}
        <div className="px-6 pb-6">
          <div className="flex items-center gap-4 cursor-pointer py-[10px] rounded-xl">
            <div className="ml-2">
              <Image
                src="/icons/view-settings-icon.svg"
                alt="View Settings"
                width={34}
                height={34}
              />
            </div>
            <h3 className="text-[#282E29] text-sm font-medium flex-1">
              View Settings
            </h3>
            <div className="mr-2">
              <Image
                src="/icons/arrow-down.svg"
                alt="Arrow"
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>

        {/* Appearance Settings Section */}
        <div className="px-6 pb-6">
          <div className="flex items-center gap-4 cursor-pointer py-[10px] rounded-xl">
            <div className="ml-2">
              <Image
                src="/icons/appearance-settings-icon.svg"
                alt="Appearance Settings"
                width={34}
                height={34}
              />
            </div>
            <h3 className="text-[#282E29] text-sm font-medium flex-1">
              Appearance Settings
            </h3>
            <div className="mr-2">
              <Image
                src="/icons/arrow-down.svg"
                alt="Arrow"
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSidebar;
