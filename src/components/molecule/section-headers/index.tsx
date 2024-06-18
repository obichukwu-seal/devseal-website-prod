import { BodyText, Title } from "@/components/atom";
import React from "react";

type Props = {
  title?: string;
  body?: string;
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
