import React, { HTMLAttributes } from "react";
type LabelProp = HTMLAttributes<HTMLSpanElement>;
type Props = LabelProp & {
  children: React.ReactNode;
};

const Label = ({ children, className = "", ...props }: Props) => {
  return (
    <span
      className={`${className} border-2 font-[600] text-[1.4rem] leading-[2.8rem] border-risd-blue-200 text-risd-blue-600 bg-risd-blue-50 px-[2.4rem] py-[1.2rem] rounded-full `}
      {...props}
    >
      {children}
    </span>
  );
};

export default Label;
