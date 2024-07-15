import {
  BodyText,
  Button,
  Column,
  Container,
  CustomInput,
  Row,
  Title,
} from "@/components/atom";
import React from "react";

type Props = {
  title?: string;
  body?: string;
  formLabel?: string;
  formPlaceholder?: string;
  formCta?: string;
};

const StayInformed = ({ title, body,formCta,formLabel,formPlaceholder, ...props }: Props) => {
  return (
    <div className="w-full bg-grey-alt-2 pt-[6.4rem] pb-[8.4rem]">
      <Container>
        <div className="items-start flex gap-[2.4rem] flex-col md:flex-row justify-between">
          <article className="space-y-[1.6rem]">
            <Title variant="lg" className="text-risd-blue-900">{title}</Title>
            <BodyText>{body}</BodyText>
          </article>
          <div className="gap-[1.6rem] flex  flex-col min-w-[48.6rem]">
            <CustomInput label={formLabel} placeholder={formPlaceholder} />
            {
              //@ts-ignore
              <Button inputType="Button">{formCta}</Button>
            }
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StayInformed;
