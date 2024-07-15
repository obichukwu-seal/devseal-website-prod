import React, { HTMLAttributes } from "react";
type SlideButton = HTMLAttributes<HTMLButtonElement>;
type Props = SlideButton & {
  isActive?: boolean;
};

const SlideButton = ({ className, isActive, ...props }: Props) => {
  return (
    <button
      className={`${className} ${
        isActive ? "" : "bg-opacity-10"
      } bg-risd-blue-50 w-[1.8rem] h-[1.8rem] border border-risd-blue-400 rounded-full `}
      {...props}
    />
  );
};

export default SlideButton;
