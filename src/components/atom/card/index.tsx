"use client";
import React, { HTMLAttributes, useMemo } from "react";
export type CardProp = HTMLAttributes<HTMLDivElement>;
export type ICardProps = CardProp & {
  variant?: "primary" | "secondary" | "tertiary" | "transparent" | "unstyled"
  rounded?: "xs" | "sm" | "lg";
  border?: "xs" | "sm" | "lg";
};

const Card = ({ variant, rounded, className, border, ...props }: ICardProps) => {
  const roundedCornerStyle = useMemo(() => {
    switch (rounded) {
      case "xs":
        return "rounded-[.5rem]";
      case "sm":
        return "rounded-[1rem]";
      case "lg":
        return "rounded-[1.5rem]";
      default:
        return "rounded-[.8rem]";
    }
  }, [rounded]);

  const borderStyle = useMemo(() => {
    switch (border) {
      case "xs":
        return "border border-grey-100";
      case "sm":
        return "border-2 border-grey-100";
      case "lg":
        return "border-4 border-grey-100";
      default:
        return "";
    }
  }, [border]);

  const VariantColors = useMemo(() => {
    switch (variant) {
      case "primary":
        return "bg-risd-blue-700";
      case "secondary":
        return "bg-risd-blue-600";
      case "tertiary":
        return "bg-brandeis-blue-50";
      case "transparent":
        return "bg-transparent";
        case "unstyled":
          return "";
      default:
        return "bg-risd-blue-700";
    }
  }, [variant]);
  
  return (
    <div
      className={`${className} ${roundedCornerStyle} ${VariantColors} ${borderStyle}`}
      {...props}
    />
  );
};

export default Card;
