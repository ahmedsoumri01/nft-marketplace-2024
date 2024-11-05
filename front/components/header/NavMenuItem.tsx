import React from 'react'
import Link from "next/link";

type Props = {
    href : string;
    text : string;
}

const NavMenuItem = ({href,text}: Props) => {
  return (
    <Link
    className='text-white  transition-all ease-in-out duration-300 hover:text-callAction'
    href={href}>{text}</Link>
  )
}

export default NavMenuItem