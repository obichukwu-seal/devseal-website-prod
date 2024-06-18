"use client";
import React, { HTMLAttributes, useMemo } from "react";
type TextProp = HTMLAttributes<HTMLHeadingElement>;
type Props = TextProp & {
  variant?: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Title = ({ variant, className, type, ...props }: Props) => {
  const textSize = useMemo(() => {
    switch (variant) {
      case "xs":
        return "text-[1.6rem] font-[700] leading-[2.4rem] font-san";
      case "sm":
        return "text-[2.4rem] font-[700] leading-[3.2rem] font-san";
      case "md":
        return "text-[3.2rem] font-[700] leading-[4rem] font-san";
      case "lg":
        return "text-[4.8rem] font-[800] leading-[5.6rem] font-san";
      case "xl":
        return "text-[6.4rem] font-[800] leading-[7.2rem] font-san";
      default:
        return "text-[1.6rem] font-[700] leading-[2.4rem] font-san";
    }
  }, [variant]);
  const HeaderType = useMemo(() => {
    switch (type) {
      case "h1":
        return <h1 className={`${textSize} ${className ? className : "text-grey-900"} `} {...props} />;
      case "h2":
        return <h2 className={`${textSize} ${className ? className : "text-grey-900"} `} {...props} />;
      case "h3":
        return <h3 className={`${textSize} ${className ? className : "text-grey-900"} `} {...props} />;
      case "h4":
        return <h4 className={`${textSize} ${className ? className : "text-grey-900"} `} {...props} />;
      case "h5":
        return <h5 className={`${textSize} ${className ? className : "text-grey-900"} `} {...props} />;
      case "h6":
        return <h6 className={`${textSize} ${className ? className : "text-grey-900"} `} {...props} />;
      default:
        return <h1 className={`${textSize} ${className ? className : "text-grey-900"} `} {...props} />;
    }
  }, [textSize, type, props, className]);
  return HeaderType;
};

export default Title;
