import React, { HTMLAttributes } from "react";
type BoxProp = HTMLAttributes<HTMLDivElement>;
type Props = BoxProp & {};

const Column = ({ className, ...props }: Props) => {
  return <div className={`${className} w-full flex flex-col`} {...props}/>;
};

export default Column;
