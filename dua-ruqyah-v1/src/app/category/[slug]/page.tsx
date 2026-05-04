"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function renderIcon(iconPath?: string | null) {
  if (iconPath) {
    return (
      <Image
        src={iconPath}
        alt="Icon"
        width={44}
        height={44}
        className="rounded-[15px]"
      />
    );
  } else {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="20" rx="4" fill="#E1EBE1" />
      </svg>
    );
  }
}

function CategoryPage() {
  const svgIcons = {
    duaIcon: (
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
        />
        <path
          d="M0.528571 8.34131C1.10786 8.01289 1.83151 8.25637 2.14504 8.85054L3.68936 11.9926C3.71832 12.0521 3.76889 12.0983 3.83074 12.122C3.89259 12.1457 3.96119 12.1451 4.02265 12.1202C4.0713 12.1009 4.11302 12.0674 4.14238 12.0242C4.17175 11.9809 4.18735 11.9298 4.18717 11.8775V3.15066C4.18717 2.63288 4.66682 2.25732 5.18633 2.25732C5.70584 2.25732 6.15673 2.63288 6.15673 3.15066V8.98154C6.15544 9.09039 6.1968 9.19548 6.27199 9.27449C6.34719 9.35344 6.45032 9.39998 6.55945 9.40435C6.61396 9.40544 6.66821 9.39555 6.71889 9.37548C6.76958 9.35535 6.81581 9.3254 6.85473 9.28723C6.89365 9.24906 6.92467 9.20358 6.94577 9.15336C6.96688 9.10319 6.97776 9.04932 6.97776 8.99489V1.36399C6.97776 0.846213 7.38606 0.470657 7.90557 0.470657C8.42508 0.470657 8.84382 0.846213 8.84382 1.36399V8.98154C8.84259 9.09039 8.88394 9.19548 8.95914 9.27449C9.03434 9.35344 9.13741 9.39998 9.24654 9.40435C9.30105 9.40544 9.3553 9.39555 9.40599 9.37548C9.45667 9.35535 9.5029 9.3254 9.54182 9.28723C9.58074 9.24906 9.61176 9.20358 9.63286 9.15336C9.65397 9.10319 9.66485 9.04932 9.66485 8.99489V2.5551C9.66485 2.03732 10.1157 1.66177 10.6353 1.66177C11.1548 1.66177 11.6056 2.07465 11.6056 2.59243V9.5771C11.6043 9.68596 11.6457 9.79105 11.7209 9.86999C11.7961 9.94894 11.8992 9.99555 12.0083 10C12.0629 10.001 12.1171 9.99115 12.1678 9.97108C12.2185 9.95095 12.2647 9.921 12.3037 9.88283C12.3426 9.84466 12.3736 9.79918 12.3947 9.74897C12.4158 9.6988 12.4267 9.64491 12.4267 9.59048V4.93754C12.4267 4.41976 12.8402 4.0442 13.3597 4.0442C13.8792 4.0442 14.2972 4.42454 14.2927 4.93754V12.9779C14.2927 17.3484 11.6056 19.5293 8.32133 19.5293H7.72423C4.43986 19.5293 3.40575 18.0553 2.64849 16.2536L0.0841466 9.96271C-0.162853 9.29271 -0.0501539 8.66921 0.528571 8.34131Z"
          fill="white"
        />
        <path
          d="M0.528571 8.34131C1.10786 8.01289 1.83151 8.25637 2.14504 8.85054L3.68936 11.9926C3.71832 12.0521 3.76889 12.0983 3.83074 12.122C3.89259 12.1457 3.96119 12.1451 4.02265 12.1202C4.0713 12.1009 4.11302 12.0674 4.14238 12.0242C4.17175 11.9809 4.18735 11.9298 4.18717 11.8775V3.15066C4.18717 2.63288 4.66682 2.25732 5.18633 2.25732C5.70584 2.25732 6.15673 2.63288 6.15673 3.15066V8.98154C6.15544 9.09039 6.1968 9.19548 6.27199 9.27449C6.34719 9.35344 6.45032 9.39998 6.55945 9.40435C6.61396 9.40544 6.66821 9.39555 6.71889 9.37548C6.76958 9.35535 6.81581 9.3254 6.85473 9.28723C6.89365 9.24906 6.92467 9.20358 6.94577 9.15336C6.96688 9.10319 6.97776 9.04932 6.97776 8.99489V1.36399C6.97776 0.846213 7.38606 0.470657 7.90557 0.470657C8.42508 0.470657 8.84382 0.846213 8.84382 1.36399V8.98154C8.84259 9.09039 8.88394 9.19548 8.95914 9.27449C9.03434 9.35344 9.13741 9.39998 9.24654 9.40435C9.30105 9.40544 9.3553 9.39555 9.40599 9.37548C9.45667 9.35535 9.5029 9.3254 9.54182 9.28723C9.58074 9.24906 9.61176 9.20358 9.63286 9.15336C9.65397 9.10319 9.66485 9.04932 9.66485 8.99489V2.5551C9.66485 2.03732 10.1157 1.66177 10.6353 1.66177C11.1548 1.66177 11.6056 2.07465 11.6056 2.59243V9.5771C11.6043 9.68596 11.6457 9.79105 11.7209 9.86999C11.7961 9.94894 11.8992 9.99555 12.0083 10C12.0629 10.001 12.1171 9.99115 12.1678 9.97108C12.2185 9.95095 12.2647 9.921 12.3037 9.88283C12.3426 9.84466 12.3736 9.79918 12.3947 9.74897C12.4158 9.6988 12.4267 9.64491 12.4267 9.59048V4.93754C12.4267 4.41976 12.8402 4.0442 13.3597 4.0442C13.8792 4.0442 14.2972 4.42454 14.2927 4.93754V12.9779C14.2927 17.3484 11.6056 19.5293 8.32133 19.5293H7.72423C4.43986 19.5293 3.40575 18.0553 2.64849 16.2536L0.0841466 9.96271C-0.162853 9.29271 -0.0501539 8.66921 0.528571 8.34131Z"
          fill="white"
        />
      </svg>
    ),
    homeIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M20.95 14.55L18.28 17.22L17.22 18.28L14.55 20.95C13.15 22.35 10.85 22.35 9.45002 20.95L6.78001 18.28L5.72001 17.22L3.05 14.55C1.65 13.15 1.65 10.85 3.05 9.45002L5.72001 6.78001L6.78001 5.72001L9.45002 3.05C10.85 1.65 13.15 1.65 14.55 3.05L17.22 5.72001L18.28 6.78001L20.95 9.45002C22.35 10.85 22.35 13.15 20.95 14.55Z"
          fill="#417360"
        />
        <path
          d="M13.06 12L18.28 17.22L17.22 18.28L12 13.06L6.78 18.28L5.72 17.22L10.94 12L5.72 6.78L6.78 5.72L12 10.94L17.22 5.72L18.28 6.78L13.06 12Z"
          fill="#417360"
        />
      </svg>
    ),
    bookmarkIcon: (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 8.65H6.5"
          stroke="#709484"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.82 0H4.18C2.05 0 0.32 1.74 0.32 3.86V17.95C0.32 19.75 1.61 20.51 3.19 19.64L8.07 16.93C8.59 16.64 9.43 16.64 9.94 16.93L14.82 19.64C16.4 20.52 17.69 19.76 17.69 17.95V3.86C17.68 1.74 15.95 0 13.82 0Z"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    playIcon: (
      <svg
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 5.89L7.93 7.75C7.69 8.16 7.89 8.5 8.36 8.5H9.63C10.11 8.5 10.3 8.84 10.06 9.25L9 11.11"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.3 16.04V14.88C3 13.49 1.11 10.78 1.11 7.9C1.11 2.95 5.66 -0.93 10.8 0.19C13.06 0.69 15.04 2.19 16.07 4.26C18.16 8.46 15.96 12.92 12.73 14.87V16.03C12.73 16.32 12.84 16.99 11.77 16.99H6.26C5.16 17 5.3 16.57 5.3 16.04Z"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 20C7.79 19.35 10.21 19.35 12.5 20"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    categoryIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 8H17C19 8 20 7 20 5V3C20 1 19 0 17 0H15C13 0 12 1 12 3V5C12 7 13 8 15 8Z"
          stroke="#709484"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 20H5C7 20 8 19 8 17V15C8 13 7 12 5 12H3C1 12 0 13 0 15V17C0 19 1 20 3 20Z"
          stroke="#709484"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
          stroke="#709484"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
          stroke="#709484"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    moreIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20H20"
          stroke="#709484"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 0H5C2 0 1 1.79 1 4V20H19V4C19 1.79 18 0 15 0Z"
          stroke="#709484"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.06 13H7.93C7.42 13 6.99 13.42 6.99 13.94V20H12.99V13.94C13 13.42 12.58 13 12.06 13Z"
          stroke="#709484"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 4V9"
          stroke="#709484"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 6.5H12.5"
          stroke="#709484"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bookIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 15.74V3.67C20 2.47 19.02 1.58 17.83 1.68H17.77C15.67 1.86 12.48 2.93 10.7 4.05L10.53 4.16C10.24 4.34 9.76 4.34 9.47 4.16L9.22 4.01C7.44 2.9 4.26 1.84 2.16 1.67C0.97 1.57 0 2.47 0 3.66V15.74C0 16.7 0.78 17.6 1.74 17.72L2.03 17.76C4.2 18.05 7.55 19.15 9.47 20.2L9.51 20.22C9.78 20.37 10.21 20.37 10.47 20.22C12.39 19.16 15.75 18.05 17.93 17.76L18.26 17.72C19.22 17.6 20 16.7 20 15.74Z"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 4.49V19.49"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.75 7.49H3.5"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 10.49H3.5"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    trophyIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.15 16.5V18.6"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.15 22H17.15V21C17.15 19.9 16.25 19 15.15 19H9.15C8.05 19 7.15 19.9 7.15 21V22V22Z"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.15 22H18.15"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.47 11.65C4.72 11.41 4.06 10.97 3.54 10.45C2.64 9.44998 2.04 8.24998 2.04 6.84998C2.04 5.44998 3.14 4.34998 4.54 4.34998H5.19C4.99 4.80998 4.89 5.31998 4.89 5.84998V8.84998C4.89 9.84998 5.1 10.79 5.47 11.65Z"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.53 11.65C19.28 11.41 19.94 10.97 20.46 10.45C21.36 9.44998 21.96 8.24998 21.96 6.84998C21.96 5.44998 20.86 4.34998 19.46 4.34998H18.81C19.01 4.80998 19.11 5.31998 19.11 5.84998V8.84998C19.11 9.84998 18.9 10.79 18.53 11.65Z"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    menuIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 7H21"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3 12H21"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3 17H21"
          stroke="#709484"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    searchIcon: (
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
    ),
    colorSwatchIcon: (
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
    ),
    closeIcon: (
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
    ),
    rightArrowIcon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M9.17 6.42L13.75 11L9.17 15.58"
          stroke="#1D1B20"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [arabicFontSize, setArabicFontSize] = useState<number>(24);
  const [translationFontSize, setTranslationFontSize] = useState<number>(18);
  const [catelogCategories, setCatelogCategories] = useState([]);

  const handleToggleMobileMenu = (open?: boolean) => {
    setIsMobileMenuOpen((prev) => (open === undefined ? !prev : open));
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch("/api/v1/catelog/category");
        const data = await result.json();
        // console.log(data);

        if (
          data?.status === 200 &&
          data?.success === true &&
          data?.data?.length > 0
        ) {
          setCatelogCategories(data?.data || []);
        }
      } catch (error) {
        console.log("error: ", error);
      }
    }
    fetchData();
  }, []);

  // console.log(catelogCategories);
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

      <main className="lg:ml-[68px]">
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
        {/* Navigation Overlay - Mobile Only */}
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
        {/* Backdrop - Mobile Only */}
        {isMobileMenuOpen && (
          <div
            className={`fixed inset-0 z-40 bg-black ${isMobileMenuOpen ? "opacity-30" : "opacity-0"}`}
            onClick={() => handleToggleMobileMenu(false)}
          />
        )}

        <div className="flex">
          {/* Category Catelog Section - Desktop Only*/}
          <div className="">
            {/* Search Bar */}
            <div className="border-b p-4 border-[#E1EBE1]">Search Bar</div>

            {/* Category */}
            <div className="px-4  py-2 space-y-2">
              {catelogCategories.map((catelogCategory) => (
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
                            {catelogCategory?.subcategories?.length}{" "}
                            Subcategories
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="hidden 2xl:block">
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
                          onChange={(e) =>
                            setArabicFontSize(Number(e.target.value))
                          }
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
          </div>
        </div>
      </main>
    </>
  );
}

export default CategoryPage;
