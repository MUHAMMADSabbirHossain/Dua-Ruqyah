"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState } from "react";
// import Categories from "./Categories";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

interface HeaderProps {
  onMenuToggle?: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    onMenuToggle?.(newState);
  };

  return (
    <>
      <header
        className={`w-full max-w-none bg-[#FBFFFB] border-b border-[#E1EBE1] px-4 lg:px-[24px] py-[10px] flex justify-between items-center h-[64px] relative transition-all duration-300 ${
          isMobileMenuOpen ? "z-10" : "z-50"
        }`}
      >
        {/* Mobile Hamburger Menu - Only visible on mobile */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(225,235,225,0.6)] transition-all duration-300 hover:bg-[rgba(225,235,225,0.8)]"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1">
            <span
              className={`block w-5 h-0.5 bg-[#417360] transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-[#417360] transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-[#417360] transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Left Section - Page Name Frame */}
        <div className="flex flex-col justify-center gap-[2px] flex-1 lg:w-[305px] lg:flex-initial ml-4 lg:ml-0">
          <h1
            className={`${poppins.className} font-[600] text-base lg:text-[18px] leading-[15px] pt-[11px] text-[#282E29]`}
          >
            Dua <span className="text-[#417360] font-normal">&</span> Ruqyah
          </h1>
          <p
            className={`${poppins.className} font-medium text-[11px] lg:text-[12px] leading-[24px] text-[#666666]`}
          >
            Hisnul Muslim
          </p>
        </div>

        {/* Right Section - Frame 71 with exact gap - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-[16px]">
          {/* Search Icon Frame */}
          <div className="flex items-center justify-center w-[48px] h-[48px] bg-[rgba(225,235,225,0.6)] rounded-full">
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M16.748 12.375V14.625C16.748 15.75 15.998 16.5 14.873 16.5H4.74805C5.05555 16.5 5.37055 16.455 5.66305 16.3575C5.74555 16.3275 5.82804 16.2975 5.91054 16.26C6.17304 16.155 6.42805 16.005 6.65305 15.81C6.72055 15.7575 6.79555 15.69 6.86305 15.6225L6.89304 15.5925L11.993 10.5H14.873C15.998 10.5 16.748 11.25 16.748 12.375Z"
                fill="#417360"
              />
              <path
                opacity="0.6"
                d="M11.1079 4.12625C11.423 4.12625 11.7648 4.25974 12.0815 4.57644L13.6724 6.16629C13.9889 6.48292 14.1216 6.82497 14.1216 7.13992C14.1216 7.45487 13.9888 7.79692 13.6724 8.11355L11.6401 10.1458L8.24756 13.5325C8.24766 13.5218 8.24853 13.511 8.24854 13.5003V6.46219L10.1343 4.57644C10.451 4.25976 10.7929 4.1263 11.1079 4.12625Z"
                fill="#417360"
                stroke="#417360"
              />
              <path
                d="M5.87305 1.5H3.62305C2.49805 1.5 1.74805 2.25 1.74805 3.375V13.5C1.74805 13.7025 1.77054 13.905 1.80804 14.1C1.83054 14.1975 1.85304 14.295 1.88304 14.3925C1.92054 14.505 1.95804 14.6175 2.00304 14.7225C2.01054 14.73 2.01055 14.7375 2.01055 14.7375C2.01805 14.7375 2.01805 14.7375 2.01055 14.745C2.11555 14.955 2.23554 15.1575 2.37804 15.345C2.46054 15.4425 2.54306 15.5325 2.62556 15.6225C2.70806 15.7125 2.79805 15.7875 2.89555 15.8625L2.90305 15.87C3.09055 16.0125 3.29304 16.1325 3.50304 16.2375C3.51054 16.23 3.51055 16.23 3.51055 16.2375C3.62305 16.29 3.73555 16.3275 3.85555 16.365C3.95305 16.395 4.05056 16.4175 4.14806 16.44C4.34306 16.4775 4.54555 16.5 4.74805 16.5C5.05555 16.5 5.37055 16.455 5.66305 16.3575C5.74555 16.3275 5.82804 16.2975 5.91054 16.26C6.17304 16.155 6.42805 16.005 6.65305 15.81C6.72055 15.7575 6.79555 15.69 6.86305 15.6225L6.89304 15.5925C7.41804 15.0525 7.74805 14.31 7.74805 13.5V3.375C7.74805 2.25 6.99805 1.5 5.87305 1.5ZM4.74805 14.625C4.12555 14.625 3.62305 14.1225 3.62305 13.5C3.62305 12.8775 4.12555 12.375 4.74805 12.375C5.37055 12.375 5.87305 12.8775 5.87305 13.5C5.87305 14.1225 5.37055 14.625 4.74805 14.625Z"
                fill="#417360"
              />
            </svg>
          </div>

          {/* Color Swatch Icon Frame */}
          <div className="flex items-center justify-center w-[48px] h-[48px] bg-[rgba(225,235,225,0.6)] rounded-full">
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M8.87305 15.75C12.8081 15.75 15.998 12.56 15.998 8.625C15.998 4.68997 12.8081 1.5 8.87305 1.5C4.93802 1.5 1.74805 4.68997 1.74805 8.625C1.74805 12.56 4.93802 15.75 8.87305 15.75Z"
                fill="#417360"
              />
              <path
                d="M16.2231 16.5C16.0881 16.5 15.9531 16.4475 15.8556 16.35L14.4606 14.955C14.2581 14.7525 14.2581 14.4225 14.4606 14.2125C14.6631 14.01 14.9931 14.01 15.2031 14.2125L16.5981 15.6075C16.8006 15.81 16.8006 16.14 16.5981 16.35C16.4931 16.4475 16.3581 16.5 16.2231 16.5Z"
                fill="#417360"
              />
            </svg>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-[8px] px-[16px] py-[12px] bg-[rgba(225,235,225,0.6)] rounded-full">
            <Image
              src="/flag.png"
              alt="Flag"
              width={24}
              height={16}
              className="rounded-[3px]"
            />
            <span
              className={`${poppins.className} font-normal text-[14px] text-[#282E29]`}
            >
              En
            </span>
            <Image
              src="/arrow-down.svg"
              alt="Arrow Down"
              width={12}
              height={12}
            />
          </div>

          {/* Support Us Button */}
          <div className="flex items-center gap-[8px] px-[20px] py-[12px] bg-[#417360] rounded-full">
            <span
              className={`${poppins.className} font-medium text-[14px] text-white`}
            >
              Support Us
            </span>
            <Image
              src="/direct-right.svg"
              alt="Direct Right"
              width={16}
              height={16}
            />
          </div>
        </div>

        {/* Mobile Right Section - Matching DuaContent button structure */}
        <div className="lg:hidden flex items-center gap-4">
          {/* Search Icon */}
          <button
            className="relative flex items-center justify-center w-12 h-12 bg-[rgba(225,235,225,0.6)] rounded-full transition-all duration-300 group touch-manipulation"
            title="Search"
          >
            <div className="absolute inset-0 rounded-full bg-[#1FA45B] opacity-0 scale-0 transition-all duration-300 group-hover:opacity-5 group-hover:scale-100 group-active:opacity-10 group-active:scale-95" />
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 transition-all duration-300"
            >
              <path
                opacity="0.4"
                d="M8.87305 15.75C12.8081 15.75 15.998 12.56 15.998 8.625C15.998 4.68997 12.8081 1.5 8.87305 1.5C4.93802 1.5 1.74805 4.68997 1.74805 8.625C1.74805 12.56 4.93802 15.75 8.87305 15.75Z"
                fill="#417360"
                className="group-hover:fill-[#1FA45B] group-active:fill-[#1FA45B] transition-colors duration-300"
              />
              <path
                d="M16.2231 16.5C16.0881 16.5 15.9531 16.4475 15.8556 16.35L14.4606 14.955C14.2581 14.7525 14.2581 14.4225 14.4606 14.2125C14.6631 14.01 14.9931 14.01 15.2031 14.2125L16.5981 15.6075C16.8006 15.81 16.8006 16.14 16.5981 16.35C16.4931 16.4475 16.3581 16.5 16.2231 16.5Z"
                fill="#417360"
                className="group-hover:fill-[#1FA45B] group-active:fill-[#1FA45B] transition-colors duration-300"
              />
            </svg>
          </button>

          {/* Color Swatch Icon */}
          <button
            className="relative flex items-center justify-center w-12 h-12 bg-[rgba(225,235,225,0.6)] rounded-full transition-all duration-300 group touch-manipulation"
            title="Color Settings"
          >
            <div className="absolute inset-0 rounded-full bg-[#1FA45B] opacity-0 scale-0 transition-all duration-300 group-hover:opacity-5 group-hover:scale-100 group-active:opacity-10 group-active:scale-95" />
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 transition-all duration-300"
            >
              <path
                opacity="0.4"
                d="M16.748 12.375V14.625C16.748 15.75 15.998 16.5 14.873 16.5H4.74805C5.05555 16.5 5.37055 16.455 5.66305 16.3575C5.74555 16.3275 5.82804 16.2975 5.91054 16.26C6.17304 16.155 6.42805 16.005 6.65305 15.81C6.72055 15.7575 6.79555 15.69 6.86305 15.6225L6.89304 15.5925L11.993 10.5H14.873C15.998 10.5 16.748 11.25 16.748 12.375Z"
                fill="#417360"
                className="group-hover:fill-[#1FA45B] group-active:fill-[#1FA45B] transition-colors duration-300"
              />
              <path
                opacity="0.6"
                d="M11.1079 4.12625C11.423 4.12625 11.7648 4.25974 12.0815 4.57644L13.6724 6.16629C13.9889 6.48292 14.1216 6.82497 14.1216 7.13992C14.1216 7.45487 13.9888 7.79692 13.6724 8.11355L11.6401 10.1458L8.24756 13.5325C8.24766 13.5218 8.24853 13.511 8.24854 13.5003V6.46219L10.1343 4.57644C10.451 4.25976 10.7929 4.1263 11.1079 4.12625Z"
                fill="#417360"
                stroke="#417360"
                className="group-hover:fill-[#1FA45B] group-hover:stroke-[#1FA45B] group-active:fill-[#1FA45B] group-active:stroke-[#1FA45B] transition-colors duration-300"
              />
              <path
                d="M5.87305 1.5H3.62305C2.49805 1.5 1.74805 2.25 1.74805 3.375V13.5C1.74805 13.7025 1.77054 13.905 1.80804 14.1C1.83054 14.1975 1.85304 14.295 1.88304 14.3925C1.92054 14.505 1.95804 14.6175 2.00304 14.7225C2.01054 14.73 2.01055 14.7375 2.01055 14.7375C2.01805 14.7375 2.01805 14.7375 2.01055 14.745C2.11555 14.955 2.23554 15.1575 2.37804 15.345C2.46054 15.4425 2.54306 15.5325 2.62556 15.6225C2.70806 15.7125 2.79805 15.7875 2.89555 15.8625L2.90305 15.87C3.09055 16.0125 3.29304 16.1325 3.50304 16.2375C3.51054 16.23 3.51055 16.23 3.51055 16.2375C3.62305 16.29 3.73555 16.3275 3.85555 16.365C3.95305 16.395 4.05056 16.4175 4.14806 16.44C4.34306 16.4775 4.54555 16.5 4.74805 16.5C5.05555 16.5 5.37055 16.455 5.66305 16.3575C5.74555 16.3275 5.82804 16.2975 5.91054 16.26C6.17304 16.155 6.42805 16.005 6.65305 15.81C6.72055 15.7575 6.79555 15.69 6.86305 15.6225L6.89304 15.5925C7.41804 15.0525 7.74805 14.31 7.74805 13.5V3.375C7.74805 2.25 6.99805 1.5 5.87305 1.5ZM4.74805 14.625C4.12555 14.625 3.62305 14.1225 3.62305 13.5C3.62305 12.8775 4.12555 12.375 4.74805 12.375C5.37055 12.375 5.87305 12.8775 5.87305 13.5C5.87305 14.1225 5.37055 14.625 4.74805 14.625Z"
                fill="#417360"
                className="group-hover:fill-[#1FA45B] group-active:fill-[#1FA45B] transition-colors duration-300"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay - With Smooth Transitions */}
      <div
        className={`fixed top-0 left-0 w-auto lg:w-full h-full z-50 bg-[#F8FFFA] lg:hidden flex flex-col transform transition-transform duration-300 ease-in-out rounded-r-2xl overflow-hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#417360] rounded-lg flex items-center justify-center">
              <svg
                width="29"
                height="20"
                viewBox="0 0 29 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.473 8.34131C27.8938 8.01289 27.1701 8.25637 26.8566 8.85054L25.3123 11.9926C25.2833 12.0521 25.2328 12.0983 25.1709 12.122C25.109 12.1457 25.0404 12.1451 24.979 12.1202C24.9303 12.1009 24.8886 12.0674 24.8592 12.0242C24.8299 11.9809 24.8143 11.9298 24.8144 11.8775V3.15066C24.8144 2.63288 24.3348 2.25732 23.8153 2.25732C23.2958 2.25732 22.8449 2.63288 22.8449 3.15066V8.98154C22.8462 9.09039 22.8048 9.19548 22.7296 9.27449C22.6544 9.35344 22.5513 9.39998 22.4422 9.40435C22.3877 9.40544 22.3334 9.39555 22.2827 9.37548C22.232 9.35535 22.1858 9.3254 22.1469 9.28723C22.1079 9.24906 22.077 9.20358 22.0559 9.15336C22.0347 9.10319 22.0239 9.04932 22.0239 8.99489V1.36399C22.0239 0.846213 21.6156 0.470657 21.0961 0.470657C20.5765 0.470657 20.1578 0.846213 20.1578 1.36399V8.98154C20.1591 9.09039 20.1177 9.19548 20.0425 9.27449C19.9673 9.35344 19.8642 9.39998 19.7551 9.40435C19.7005 9.40544 19.6463 9.39555 19.5956 9.37548C19.5449 9.35535 19.4987 9.3254 19.4597 9.28723C19.4208 9.24906 19.3898 9.20358 19.3687 9.15336C19.3476 9.10319 19.3367 9.04932 19.3367 8.99489V2.5551C19.3367 2.03732 18.8859 1.66177 18.3664 1.66177C17.8469 1.66177 17.396 2.07465 17.396 2.59243V9.5771C17.3973 9.68596 17.3559 9.79105 17.2807 9.86999C17.2055 9.94894 17.1024 9.99555 16.9933 10C16.9388 10.001 16.8845 9.99115 16.8338 9.97108C16.7831 9.95095 16.7369 9.921 16.698 9.88283C16.659 9.84466 16.6281 9.79918 16.6069 9.74897C16.5858 9.6988 16.5749 9.64491 16.5749 9.59048V4.93754C16.5749 4.41976 16.1614 4.0442 15.6419 4.0442C15.1224 4.0442 14.7044 4.42454 14.7089 4.93754V12.9779C14.7089 17.3484 17.396 19.5293 20.6803 19.5293H21.2774C24.5617 19.5293 25.5959 18.0553 26.3531 16.2536L28.9175 9.96271C29.1646 9.29271 29.0519 8.66921 28.473 8.34131Z"
                  fill="white"
                ></path>
                <path
                  d="M0.528571 8.34131C1.10786 8.01289 1.83151 8.25637 2.14504 8.85054L3.68936 11.9926C3.71832 12.0521 3.76889 12.0983 3.83074 12.122C3.89259 12.1457 3.96119 12.1451 4.02265 12.1202C4.0713 12.1009 4.11302 12.0674 4.14238 12.0242C4.17175 11.9809 4.18735 11.9298 4.18717 11.8775V3.15066C4.18717 2.63288 4.66682 2.25732 5.18633 2.25732C5.70584 2.25732 6.15673 2.63288 6.15673 3.15066V8.98154C6.15544 9.09039 6.1968 9.19548 6.27199 9.27449C6.34719 9.35344 6.45032 9.39998 6.55945 9.40435C6.61396 9.40544 6.66821 9.39555 6.71889 9.37548C6.76958 9.35535 6.81581 9.3254 6.85473 9.28723C6.89365 9.24906 6.92467 9.20358 6.94577 9.15336C6.96688 9.10319 6.97776 9.04932 6.97776 8.99489V1.36399C6.97776 0.846213 7.38606 0.470657 7.90557 0.470657C8.42508 0.470657 8.84382 0.846213 8.84382 1.36399V8.98154C8.84259 9.09039 8.88394 9.19548 8.95914 9.27449C9.03434 9.35344 9.13741 9.39998 9.24654 9.40435C9.30105 9.40544 9.3553 9.39555 9.40599 9.37548C9.45667 9.35535 9.5029 9.3254 9.54182 9.28723C9.58074 9.24906 9.61176 9.20358 9.63286 9.15336C9.65397 9.10319 9.66485 9.04932 9.66485 8.99489V2.5551C9.66485 2.03732 10.1157 1.66177 10.6353 1.66177C11.1548 1.66177 11.6056 2.07465 11.6056 2.59243V9.5771C11.6043 9.68596 11.6457 9.79105 11.7209 9.86999C11.7961 9.94894 11.8992 9.99555 12.0083 10C12.0629 10.001 12.1171 9.99115 12.1678 9.97108C12.2185 9.95095 12.2647 9.921 12.3037 9.88283C12.3426 9.84466 12.3736 9.79918 12.3947 9.74897C12.4158 9.6988 12.4267 9.64491 12.4267 9.59048V4.93754C12.4267 4.41976 12.8402 4.0442 13.3597 4.0442C13.8792 4.0442 14.2972 4.42454 14.2927 4.93754V12.9779C14.2927 17.3484 11.6056 19.5293 8.32133 19.5293H7.72423C4.43986 19.5293 3.40575 18.0553 2.64849 16.2536L0.0841466 9.96271C-0.162853 9.29271 -0.0501539 8.66921 0.528571 8.34131Z"
                  fill="white"
                ></path>
                <path
                  d="M0.528571 8.34131C1.10786 8.01289 1.83151 8.25637 2.14504 8.85054L3.68936 11.9926C3.71832 12.0521 3.76889 12.0983 3.83074 12.122C3.89259 12.1457 3.96119 12.1451 4.02265 12.1202C4.0713 12.1009 4.11302 12.0674 4.14238 12.0242C4.17175 11.9809 4.18735 11.9298 4.18717 11.8775V3.15066C4.18717 2.63288 4.66682 2.25732 5.18633 2.25732C5.70584 2.25732 6.15673 2.63288 6.15673 3.15066V8.98154C6.15544 9.09039 6.1968 9.19548 6.27199 9.27449C6.34719 9.35344 6.45032 9.39998 6.55945 9.40435C6.61396 9.40544 6.66821 9.39555 6.71889 9.37548C6.76958 9.35535 6.81581 9.3254 6.85473 9.28723C6.89365 9.24906 6.92467 9.20358 6.94577 9.15336C6.96688 9.10319 6.97776 9.04932 6.97776 8.99489V1.36399C6.97776 0.846213 7.38606 0.470657 7.90557 0.470657C8.42508 0.470657 8.84382 0.846213 8.84382 1.36399V8.98154C8.84259 9.09039 8.88394 9.19548 8.95914 9.27449C9.03434 9.35344 9.13741 9.39998 9.24654 9.40435C9.30105 9.40544 9.3553 9.39555 9.40599 9.37548C9.45667 9.35535 9.5029 9.3254 9.54182 9.28723C9.58074 9.24906 9.61176 9.20358 9.63286 9.15336C9.65397 9.10319 9.66485 9.04932 9.66485 8.99489V2.5551C9.66485 2.03732 10.1157 1.66177 10.6353 1.66177C11.1548 1.66177 11.6056 2.07465 11.6056 2.59243V9.5771C11.6043 9.68596 11.6457 9.79105 11.7209 9.86999C11.7961 9.94894 11.8992 9.99555 12.0083 10C12.0629 10.001 12.1171 9.99115 12.1678 9.97108C12.2185 9.95095 12.2647 9.921 12.3037 9.88283C12.3426 9.84466 12.3736 9.79918 12.3947 9.74897C12.4158 9.6988 12.4267 9.64491 12.4267 9.59048V4.93754C12.4267 4.41976 12.8402 4.0442 13.3597 4.0442C13.8792 4.0442 14.2972 4.42454 14.2927 4.93754V12.9779C14.2927 17.3484 11.6056 19.5293 8.32133 19.5293H7.72423C4.43986 19.5293 3.40575 18.0553 2.64849 16.2536L0.0841466 9.96271C-0.162853 9.29271 -0.0501539 8.66921 0.528571 8.34131Z"
                  fill="white"
                ></path>
              </svg>
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
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Categories Component - Takes remaining space with fade-in animation */}
        <div
          className={`flex-1 min-h-0 transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 delay-150" : "opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* <Categories 
            currentCategorySlug={typeof window !== 'undefined' ? window.location.pathname.split('/')[2] : undefined}
            onScrollToDua={(duaId: number, duaTitle: string) => {
              // Close mobile menu first
              setIsMobileMenuOpen(false);
              // Wait for menu to close, then scroll
              setTimeout(() => {
                // Get the actual dua ID from the database by matching sort_order
                const duaNumber = duaTitle.match(/^\d+/)?.[0];
                if (duaNumber) {
                  // Find dua element by sort order (207 + sort_order - 1)
                  const expectedDuaId = 207 + parseInt(duaNumber) - 1;
                  let targetElement = document.getElementById(`dua-${expectedDuaId}`);
                  
                  if (!targetElement) {
                    // Fallback: try all dua elements and match by number
                    const allDuaElements = document.querySelectorAll('[id^="dua-"]');
                    const targetIndex = parseInt(duaNumber) - 1;
                    if (allDuaElements[targetIndex]) {
                      targetElement = allDuaElements[targetIndex] as HTMLElement;
                    }
                  }
                  
                  if (targetElement) {
                    targetElement.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'start' 
                    });
                  }
                }
              }, 400);
            }}
          /> */}
        </div>
      </div>

      {/* Backdrop with fade animation */}
      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 lg:hidden bg-black transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-30" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
