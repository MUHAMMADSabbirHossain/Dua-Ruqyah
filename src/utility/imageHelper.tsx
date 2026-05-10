import svgIcons from "@/components/ui/icon/svgIcons";
import Image from "next/image";

export function renderIcon(iconPath?: string | null) {
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
    return svgIcons?.defaultIcon;
  }
}
