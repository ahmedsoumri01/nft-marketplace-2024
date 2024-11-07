import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation'
type Props = {
    href : string;
    text : string;
}

const NavMenuItem = ({href,text}: Props) => {
  const currentPath = usePathname();
  return (
    <Link
    className={`text-white  transition-all ease-in-out duration-300 hover:text-callAction
      
      ${currentPath === href ? "text-callAction" : ""}`}
    href={href}>{text}</Link>
  )
}

export default NavMenuItem