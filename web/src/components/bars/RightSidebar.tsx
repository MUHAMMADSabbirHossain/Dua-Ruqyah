"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const RightSidebar: FC = () => {
  const [arabicFontSize, setArabicFontSize] = useState<number>(28);
  const [translationFontSize, setTranslationFontSize] = useState<number>(28);
  const [fontSettingsOpen, setFontSettingsOpen] = useState<boolean>(true);

  return (
    <div
      className={`${poppins.className} w-[352px] bg-[#F7FFFB] flex flex-col pt-[14px] h-[calc(100vh-64px)] overflow-y-auto border-l border-[#E1EBE1]`}
    >
      {/* Font Settings Section */}
      <section className="px-6 pb-3">
        <div
          className="flex items-center gap-4 cursor-pointer py-[10px] rounded-xl"
          onClick={() => setFontSettingsOpen(!fontSettingsOpen)}
        >
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
              alt="Arrow"
              width={14}
              height={14}
              className={`transition-transform duration-200 ${fontSettingsOpen ? "" : "rotate-180"}`}
            />
          </div>
        </div>

        {fontSettingsOpen && (
          <div className="mt-6 space-y-[22px]">
            {/* Arabic Font Size */}
            <div className="px-2 pb-2">
              <div className="px-2 mb-3">
                <label className="text-[#282E29] text-sm font-medium">
                  Arabic Font Size
                </label>
              </div>
              <div className="flex items-center gap-4 px-2">
                <div className="flex-1 relative py-2">
                  <div className="w-full h-[3px] bg-[#EEF6EB] rounded-full relative">
                    <div
                      className="absolute h-[3px] bg-[#417360] rounded-full"
                      style={{
                        width: `${((arabicFontSize - 12) / (40 - 12)) * 100}%`,
                      }}
                    ></div>
                    <div
                      className="absolute top-1/2 w-[14px] h-[14px] bg-[#417360] rounded-full transform -translate-y-1/2 cursor-pointer"
                      style={{
                        left: `calc(${((arabicFontSize - 12) / (40 - 12)) * 100}% - 7px)`,
                      }}
                    ></div>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="40"
                    value={arabicFontSize}
                    onChange={(e) => setArabicFontSize(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <span className="text-[#417360] text-sm font-semibold min-w-[24px]">
                  {arabicFontSize}
                </span>
              </div>
            </div>

            {/* Translation Font Size */}
            <div className="px-2 pb-2">
              <div className="px-2 mb-3">
                <label className="text-[#282E29] text-sm font-medium">
                  Translation Font Size
                </label>
              </div>
              <div className="flex items-center gap-4 px-2">
                <div className="flex-1 relative py-2">
                  <div className="w-full h-[3px] bg-[#EEF6EB] rounded-full relative">
                    <div
                      className="absolute h-[3px] bg-[#417360] rounded-full"
                      style={{
                        width: `${((translationFontSize - 12) / (40 - 12)) * 100}%`,
                      }}
                    ></div>
                    <div
                      className="absolute top-1/2 w-[14px] h-[14px] bg-[#417360] rounded-full transform -translate-y-1/2 cursor-pointer"
                      style={{
                        left: `calc(${((translationFontSize - 12) / (40 - 12)) * 100}% - 7px)`,
                      }}
                    ></div>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="40"
                    value={translationFontSize}
                    onChange={(e) =>
                      setTranslationFontSize(Number(e.target.value))
                    }
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <span className="text-[#417360] text-sm font-semibold min-w-[24px]">
                  {translationFontSize}
                </span>
              </div>
            </div>

            {/* Arabic Script & Font Face */}
            <div className="px-2">
              <div className="px-2 mb-3">
                <label className="text-[#282E29] text-sm font-medium">
                  Arabic Script & Font Face
                </label>
              </div>
              <div className="mx-2">
                <div className="bg-[#EBF9EC] rounded-lg border border-[#E2E8F0] py-[13px] px-4 flex items-center justify-between cursor-pointer hover:bg-[#F8FAFC] transition-colors">
                  <span className="text-[#282E29] text-sm">Uthma</span>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M9.17 6.42L13.75 11L9.17 15.58"
                      stroke="#1D1B20"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* View Settings Section */}
      <section className="px-6 pb-6">
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
              src="/icons/arrow-down-view.svg"
              alt="Arrow"
              width={14}
              height={14}
            />
          </div>
        </div>
      </section>

      {/* Appearance Settings Section */}
      <section className="px-6 pb-6">
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
              src="/icons/arrow-down-view.svg"
              alt="Arrow"
              width={14}
              height={14}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightSidebar;
