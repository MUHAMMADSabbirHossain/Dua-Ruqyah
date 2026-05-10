import svgIcons from "../ui/icon/svgIcons";

function NavigateVar() {
  return (
    <>
      {/* Responsive Sidebar - Desktop: left sidebar, Mobile: bottom bar */}
      <div className="fixed bottom-0 w-full flex items-center justify-evenly bg-[#EEF6EB] border-[#E1EBE1] left-0 border-t lg:w-[68px] lg:top-0 lg:flex-col lg:border-r">
        {/* Dua Icon - Desktop only */}
        <div className="mt-3 mb-8 hidden lg:block">
          <div className="w-[44px] h-[44px] bg-[#417360] rounded-xl flex items-center justify-center">
            {svgIcons?.duaIcon}
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex justify-evenly w-full md:max-w-[380px] lg:mt-[43px] lg:flex-col lg:items-center lg:justify-center lg:flex-1 lg:space-y-6">
          {/* Home Icon */}
          <button className="w-10 h-10 lg:rounded-xl flex items-center justify-center">
            {svgIcons?.homeIcon}
          </button>

          {/* Bookmark Icon */}
          <button className="w-10 h-10 lg:rounded-xl flex items-center justify-center">
            {svgIcons?.bookmarkIcon}
          </button>

          {/* Play Icon */}
          <button className="w-10 h-10 lg:rounded-xl flex items-center justify-center">
            {svgIcons?.playIcon}
          </button>

          {/* Grid/Categories Icon */}
          <button className="w-10 h-10 lg:rounded-xl flex items-center justify-center">
            {svgIcons?.categoryIcon}
          </button>

          {/* More/Menu Icon */}
          <button className="w-10 h-10 lg:rounded-xl flex items-center justify-center">
            {svgIcons?.moreIcon}
          </button>

          {/* Book Icon */}
          <button className="w-10 h-10 lg:rounded-xl flex items-center justify-center">
            {svgIcons?.bookIcon}
          </button>
        </div>

        {/* Bottom Icons - Desktop only */}
        <div className="hidden lg:flex flex-col items-center space-y-4 mb-3">
          {/* Trophy Icon - Desktop only */}
          <button className="w-10 h-10 rounded-xl flex items-center justify-center">
            {svgIcons?.trophyIcon}
          </button>

          {/* Menu Icon - Desktop only */}
          <button className="w-10 h-10 rounded-xl flex items-center justify-center">
            {svgIcons?.menuIcon}
          </button>
        </div>
      </div>
    </>
  );
}

export default NavigateVar;
