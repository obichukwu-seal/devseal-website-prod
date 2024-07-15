"use client";
import Link, { LinkProps } from "next/link";
import React, { HTMLAttributes, useMemo } from "react";

type Props = LinkProps & {
  variant?: "primary" | "secondary" | "tertiary" | "outlined" | "unstyled";
  inputType?: "link" | "Button";
  className?: string;
  children: React.ReactNode;
};
type ButtonProop = HTMLAttributes<HTMLButtonElement>;

const Button = ({
  className,
  children,
  variant,
  inputType = "link",
  ...props
}: Props) => {
  const primaryClasses = `${className} py-[1.2rem] px-[2.4rem] hover:bg-opacity-80  transition-all duration-300 text-center  cursor-pointer font-[600] font-san text-grey-50 leading-[2.4rem] bg-risd-blue-500 text-[1.6rem] rounded-[.8rem]`;
  const secondaryClasses = `${className} py-[1.2rem] px-[2.4rem] hover:bg-opacity-80 transition-all duration-300 text-center  cursor-pointer font-[600] font-san text-risd-blue-500 leading-[2.4rem] bg-grey-50 text-[1.6rem] rounded-[.8rem]`;
  const tertiaryClasses = `${className} py-[1.2rem] px-[2.4rem] hover:bg-opacity-80 transition-all duration-300 text-center  cursor-pointer font-[600] font-san text-risd-blue-500 leading-[2.4rem] bg-white text-[1.6rem] border-2 border-risd-blue-200 rounded-[.8rem]`;
  const outlinedClasses = `${className} py-[1.2rem] px-[2.4rem] hover:bg-opacity-80 transition-all duration-300 text-center  cursor-pointer font-[600] font-san text-risd-blue-500 leading-[2.4rem] text-[1.6rem] border-2 border-risd-blue-200 rounded-[.8rem]`;
  const unStyledClasses = `${className} p-[.8rem] transition-all duration-300 text-center hover:text-risd-blue-500 cursor-pointer font-[600] font-san text-grey-600 leading-[2.4rem] text-[1.6rem] rounded-[.8rem]`;
  const Links = useMemo(() => {
    switch (variant) {
      case "primary":
        return (
          <Link className={`leading-[2.268rem]`} {...props}>
            <div className={primaryClasses}>{children}</div>
          </Link>
        );
      case "secondary":
        return (
          <Link className={`leading-[2.268rem]`} {...props}>
            <div className={secondaryClasses}>{children}</div>
          </Link>
        );
      case "tertiary": {
        return (
          <Link className={`leading-[2.268rem]`} {...props}>
            <div className={tertiaryClasses}>{children}</div>
          </Link>
        );
      }
      case "outlined": {
        return (
          <Link className={`leading-[2.268rem]`} {...props}>
            <div className={outlinedClasses}>{children}</div>
          </Link>
        );
      }
      case "unstyled": {
        return (
          <Link className={`leading-[2.268rem]`} {...props}>
            <div className={unStyledClasses}>{children}</div>
          </Link>
        );
      }
      default:
        return (
          <Link className={`leading-[2.268rem]`} {...props}>
            <div className={primaryClasses}>{children}</div>
          </Link>
        );
    }
  }, [
    variant,
    children,
    primaryClasses,
    secondaryClasses,
    tertiaryClasses,
    props,
    outlinedClasses,
    unStyledClasses,
  ]);

  const Buttons = useMemo(() => {
    const btnProp = props as ButtonProop;
    switch (variant) {
      case "primary":
        return (
          <button className={primaryClasses} {...btnProp}>
            {children}
          </button>
        );
      case "secondary":
        return (
          <button className={secondaryClasses} {...btnProp}>
            {children}
          </button>
        );
      case "tertiary": {
        return (
          <button className={tertiaryClasses} {...btnProp}>
            {children}
          </button>
        );
      }
      case "outlined": {
        return (
          <button className={outlinedClasses} {...btnProp}>
            {children}
          </button>
        );
      }
      case "unstyled": {
        return (
          <button className={unStyledClasses} {...btnProp}>
            {children}
          </button>
        );
      }
      default:
        return (
          <button className={primaryClasses} {...btnProp}>
            {children}
          </button>
        );
    }
  }, [
    variant,
    children,
    primaryClasses,
    secondaryClasses,
    tertiaryClasses,
    props,
    outlinedClasses,
    unStyledClasses,
  ]);
  return inputType === "Button" ? Buttons : Links;
};

export default Button;
