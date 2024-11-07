import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

type Props = {
  index: number;
  text: string;
  href: string;
};

const MobileNavItem = ({ text, href, index }: Props) => {
  const currentPath = usePathname();

  return (
    <li key={index} className={`p-2 cursor-pointer transition-all ease-in-out duration-300 hover:bg-callAction hover:rounded-lg hover:text-white font-bold  ${currentPath === href ? "text-callAction" : ""}`}>
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default MobileNavItem;
