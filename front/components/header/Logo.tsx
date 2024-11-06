import React from "react";
import Link from "next/link";
import Icon from "@/components/Icons";
type Props = {
  title: string;
  customTitleStyle?: string;
};

const Logo = ({ title, customTitleStyle }: Props) => {
  return (
    <Link href={"/"} className="flex items-center gap-3 font-bold">
      <Icon name="Storefront" alt="home" width={24} height={24} />
      <p className={customTitleStyle}>{title}</p>
    </Link>
  );
};

export default Logo;
