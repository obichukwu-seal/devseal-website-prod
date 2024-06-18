import Image, { ImageProps } from "next/image";
import React, { useMemo } from "react";

type Props = ImageProps & {
  size?: "sm" | "lg" | "xl" | "2xl" | "4xl";
  bg?: string | "primary" | "secondary";
};

const Avatar = ({ size, bg, ...props }: Props) => {
  const imageSizes = useMemo(() => {
    switch (size) {
      case "sm":
        return "w-10 h-10";
      case "lg":
        return "w-20 h-20";
      case "xl":
        return "w-30 h-30";
      case "2xl":
        return "w-[4rem] h-[4rem]";
      case "4xl":
        return "w-[8.5rem] h-[8.5rem]";
      default:
        return "w-10 h-10";
    }
  }, [size]);
  const bgColor = useMemo(() => {
    switch (bg) {
      case "primary":
        return "bg-risd-alt";
      case "secondary":
        return "bg-risd-blue-900";
      default:
        return `bg-risd-alt`;
    }
  }, [bg]);
  return (
    <figure
      className={`rounded-full items-end justify-center flex ${imageSizes} ${bgColor} overflow-hidden`}
    >
      <Image {...props} alt={props.alt} className={`${props.className} object-cover`} />;
    </figure>
  );
};

export default Avatar;
