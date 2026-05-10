import Image from "next/image";
import svgIcons from "../ui/icon/svgIcons";

function Header({
  poppinsFont,
  handleToggleMobileMenu,
  isMobileMenuOpen,
}: {
  poppinsFont: unknown;
  handleToggleMobileMenu: (open: boolean) => void;
  isMobileMenuOpen: boolean;
}) {
  return (
    <>
      {/* Header - Desktop View */}
      <header className="bg-[#FBFFFB]  h-[64px] px-4 flex items-center justify-between">
        {/* Hamburger Menu - Mobile only */}
        <button
          onClick={() => handleToggleMobileMenu(true)}
          className="bg-[rgba(225,235,225,0.6)] w-10 h-10 rounded-full flex items-center justify-center lg:hidden"
          aria-label="Toggle Menu"
        >
          {svgIcons?.menuIcon}
        </button>

        {/* Left Section */}
        <div className="flex flex-col justify-center gap-[2px] flex-1 ml-4">
          <h1
            className={`${poppinsFont.className} text-[#282E29] font-semibold text-[18px] leading-[15px] pt-[11px]`}
          >
            Dua <span className="text-[#417360] font-normal">&</span> Ruqyah
          </h1>
          <p
            className={`${poppinsFont.className} text-[#666666] font-medium text-[11px] leading-[24px]`}
          >
            Hisnul Muslim
          </p>
        </div>

        {/* Right Section - Desktop only */}
        <div className="hidden lg:flex items-center gap-[16px]">
          {/* Search Icon */}
          <div className="bg-[rgba(225,235,225,0.6)] w-[48px] h-[48px] rounded-full flex items-center justify-center">
            {svgIcons?.searchIcon}
          </div>

          {/* Color Swatch Icon */}
          <div className="bg-[rgba(225,235,225,0.6)] w-[48px] h-[48px] rounded-full flex items-center justify-center gap-[8px]">
            {svgIcons?.colorSwatchIcon}
          </div>

          {/* Language Selector */}
          <div className="bg-[rgba(225,235,225,0.6)] px-[16px] py-[12px] rounded-full flex items-center gap-[8px]">
            <Image
              src="/images/flag.png"
              alt="Flag"
              width={24}
              height={24}
              className="w-auto"
            />

            <span className={`text-[#282E29] text-[14px]`}>En</span>

            <Image
              src="/icons/arrow-down.svg"
              alt="Arrow Down"
              width={12}
              height={12}
            />
          </div>

          {/* Support Button */}
          <div className="bg-[#417360] px-[20px] py-[12px] rounded-full flex items-center gap-[8px]">
            <span className="text-[14px] text-white font-medium">
              Support Us
            </span>

            <Image
              src="/icons/direct-right.svg"
              alt="Direct Right"
              width={16}
              height={16}
            />
          </div>
        </div>

        {/* Right Section - Mobile Only */}
        <div className="flex gap-4 lg:hidden">
          {/* Search Icon */}
          <div className="bg-[rgba(225,235,225,0.6)] w-[48px] h-[48px] rounded-full flex items-center justify-center">
            {svgIcons?.searchIcon}
          </div>

          {/* Color Swatch Icon */}
          <div className="bg-[rgba(225,235,225,0.6)] w-[48px] h-[48px] rounded-full flex items-center justify-center gap-[8px]">
            {svgIcons?.colorSwatchIcon}
          </div>
        </div>
      </header>

      {/* Navigation Overlay - Mobile View Only */}
      <div
        className={`bg-[#F8FFFA] fixed top-0 left-0 h-full w-[90%] lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} z-50 rounded-r-4xl`}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#417360] rounded-lg flex items-center justify-center">
              {svgIcons?.duaIcon}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Dua & Ruqyah
              </h2>

              <p className="text-sm text-gray-600">Hisnul Muslim</p>
            </div>
          </div>
          {/* Close Button */}
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors duration-300"
            onClick={() => handleToggleMobileMenu(false)}
          >
            {svgIcons?.closeIcon}
          </button>
        </div>
      </div>

      {/* Backdrop - Mobile View */}
      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 bg-black ${isMobileMenuOpen ? "opacity-30" : "opacity-0"}`}
          onClick={() => handleToggleMobileMenu(false)}
        />
      )}
    </>
  );
}

export default Header;
