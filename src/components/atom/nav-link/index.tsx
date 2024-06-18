"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

const NavLink = ({ children, ...props }: Props) => {
  const pathname = usePathname();
  const isActive = `${
    typeof props.href === "string" &&
    (pathname === props.href ? "text-risd-blue-500" : "text-grey-500")
  }`;
  return (
    <Link
      {...props}
      className={`${isActive} hover:text-risd-blue-500 font-[600] font-san test-[1.6rem] leading-[2.4rem] transition-all duration-300 ${props.className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
