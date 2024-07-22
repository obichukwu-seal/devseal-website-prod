"use client"
import { BodyText, Title } from "@/components/atom";
import React, {HTMLAttributes}from "react";

type Props = HTMLAttributes<HTMLHeadingElement> & {
  title?: string;
  body?: string | JSX.Element;
  titleClassName?: string;
  bodyClassName?: string;
};

const SectionHeaders = ({ title = "", body = "",titleClassName="", bodyClassName="", ...props }: Props) => {
  return (
    <header {...props}>
      <article className="max-w-[79.2rem] space-y-[2.4rem]">
        <Title variant="lg" type="h2" className={titleClassName}>{title}</Title>
        <BodyText variant="md"className={bodyClassName} >{body}</BodyText>
      </article>
    </header>
  );
};


export default SectionHeaders;