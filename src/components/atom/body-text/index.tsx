import React, { HTMLAttributes, useMemo } from "react";
type TextProps = HTMLAttributes<HTMLParagraphElement>;
type Props = TextProps & {
  variant?: "xxs"|"xs" | "sm" | "md";
};

const BodyText = ({ className, variant, ...props }: Props) => {
  const textSize = useMemo(() => {
    switch (variant) {
      case "xxs":
        return "text-[1.2rem] leading-[1.6rem] font-[500]";
      case "xs":
        return "text-[1.4rem] leading-[2.1rem] font-san";
      case "sm":
        return "text-[1.6rem] leading-[2.4rem] font-san";
      case "md":
        return "text-[1.8rem] leading-[2.8rem] font-san";
      default:
        return "text-[1.6rem] leading-[2.4rem] font-san";
    }
  }, [variant]);
  return (
    <p
      className={`${
        className ? className : "text-grey-600 "
      } font-normal ${textSize}`}
      {...props}
    />
  );
};

export default BodyText;
