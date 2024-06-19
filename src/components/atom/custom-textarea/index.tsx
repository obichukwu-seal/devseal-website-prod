import React, { HTMLAttributes } from "react";
import Column from "../column";
type TextAreaType = HTMLAttributes<HTMLTextAreaElement>;
type Props = TextAreaType & {
  label?: string;
  labelClass?: string;
  containerClassName?: string;
  placeholder?: string;
  error?: any;
};

const CustomTextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  (textAreaProps: Props, ref) => {
    const {
      label = "",
      labelClass = "",
      containerClassName = "",
      className = "",
      placeholder = "",
      error,
      ...props
    } = textAreaProps;
    return (
      <Column className="gap-[1rem]">
        {label && (
          <label
            htmlFor={label}
            className={`leading-[2.854rem] font-medium ${labelClass}`}
          >
            {label}
          </label>
        )}
        <div
          className={` ${containerClassName} border py-[1.2rem] px-[1.6rem] space-y-[.5rem] border-seal-secondary-100 rounded-[.5rem] min-h-[5rem] w-full`}
        >
          <textarea
            className={`${className} w-full h-full border-none outline-none bg-transparent resize-none`}
            rows={5}
            ref={ref}
            cols={5}
            placeholder={placeholder}
            {...props}
          />
        </div>
        {error && <small className="text-red-600 text-[12px]">{error}</small>}
      </Column>
    );
  }
);

export default CustomTextArea;
