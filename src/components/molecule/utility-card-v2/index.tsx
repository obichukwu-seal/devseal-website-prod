import { BodyText, Card, Title } from "@/components/atom";
import React from "react";

type Props = {
  cardImage?: React.JSX.Element;
  title?: string;
  body?: string;
};

const UtiltityCardV2 = ({ cardImage, ...props }: Props) => {
  return (
    <Card
      variant="unstyled"
      className="hover:border-risd-blue-600 duration-300 overflow-hidden transition-all"
      border="xs"
      rounded="xs"
    >
      <figure className="w-full">{cardImage && cardImage}</figure>
      <article className="space-y-[.8rem] py-[3.2rem] px-[1.6rem]">
        <Title variant="sm" type="h4">
          {props.title}
        </Title>
        <BodyText variant="md">{props.body}</BodyText>
      </article>
    </Card>
  );
};

export default UtiltityCardV2;
