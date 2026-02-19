import Image from "next/image";

export const renderIcon = (iconPath?: string | null) => {
  if (iconPath) {
    return (
      <Image
        src={`/icons/${iconPath}.svg`}
        alt="Category Icon"
        width={44}
        height={44}
        className="rounded-[15px]"
      />
    );
  }
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
};
