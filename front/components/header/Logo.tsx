import React from "react";
import Link from "next/link";
import Icon from "@/components/Icons";
import { FaStore } from "react-icons/fa";
type Props = {
  title: string;
  customTitleStyle?: string;
};

const Logo = ({ title, customTitleStyle }: Props) => {
  return (
    <Link href={"/"} className="flex items-center gap-3 font-bold">
      <Icon icon={<FaStore />} />
      <p className={customTitleStyle}>{title}</p>
    </Link>
  );
};

export default Logo;
