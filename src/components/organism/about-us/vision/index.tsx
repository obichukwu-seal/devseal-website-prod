import { BodyText, Container, Title } from "@/components/atom";
import { ABOUT_PAGE_CONTENT } from "@/constants";
import React from "react";

type Props = {};

const OurVision = (props: Props) => {
  const ourVisionContent = ABOUT_PAGE_CONTENT.sectionOne;
  return (
    <section className="pt-[4rem]  bg-grey-alt-2">
      <Container className="min-h-[66.4rem] h-full grid grid-cols-1 sm:grid-cols-2 items-center relative justify-between gap-[8.2rem]">
        <article className="h-full flex flex-col justify-between gap-[2.6rem] col-span-2 md:col-span-1">
          <div className=" space-y-[1.6rem]">
            <Title variant="lg" type="h2">
              {ourVisionContent.title}
            </Title>
            <BodyText variant="sm">{ourVisionContent.body}</BodyText>
          </div>
          <div className=" space-y-[1.6rem] md:hidden">
            <Title variant="md" type="h3">
              {ourVisionContent.articleOne.title}
            </Title>
            <BodyText variant="sm">{ourVisionContent.articleOne.body}</BodyText>
          </div>
          <div className=" space-y-[1.6rem]">
            <Title variant="md" type="h3">
              {ourVisionContent.articleTwo.title}
            </Title>
            <BodyText variant="sm">{ourVisionContent.articleTwo.body}</BodyText>
          </div>
        </article>
        <article className=" space-y-[1.6rem] hidden md:block">
          <Title variant="md" type="h3">
            {ourVisionContent.articleOne.title}
          </Title>
          <BodyText variant="sm">{ourVisionContent.articleOne.body}</BodyText>
        </article>
        <span className="h-full border-l-2  max-h-[52.4rem] absolute left-1/2 top-0 hidden md:block -translate-x-1/2 border-risd-blue-200">
          <div className="w-full h-full flex justify-between items-center flex-col">
            <div className=" w-[2.8rem] h-[2.8rem] rounded-full bg-risd-blue-200  -translate-x-1/2 overflow-hidden relative before:absolute before:w-[2rem] before:h-[2rem] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-risd-blue-300 before:rounded-full "></div>
            <div className="  w-[2.8rem] h-[2.8rem] rounded-full bg-risd-blue-200 -translate-x-1/2 -translate-y-20 overflow-hidden relative before:absolute before:w-[2rem] before:h-[2rem] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-risd-blue-300 before:rounded-full "></div>
            <div className="  w-[2.8rem] h-[2.8rem] rounded-full bg-risd-blue-200 -translate-x-1/2 overflow-hidden relative before:absolute before:w-[2rem] before:h-[2rem] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-risd-blue-300 before:rounded-full "></div>
          </div>
        </span>
      </Container>
    </section>
  );
};

export default OurVision;
