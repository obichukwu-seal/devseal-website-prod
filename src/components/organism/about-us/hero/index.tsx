import { Container, Title } from "@/components/atom";
import { Seals } from "@/components/molecule";
import { ABOUT_PAGE_CONTENT } from "@/constants";
import React from "react";

type Props = {};

const AboutUsPageHero = (props: Props) => {
  const aboutPageHero = ABOUT_PAGE_CONTENT.hero;
  return (
    <section className="py-[4rem] md:py-[6.4rem] bg-grey-alt-2">
      <Container className="space-y-[6.4rem]">
        <Title className="max-w-[89.4rem] text-[5rem] md:text-[6.4rem] font-[800] md:leading-[7.2rem] leading-[5.2rem] font-san">
          {aboutPageHero.title.split(",")[0]},
          <span className="text-risd-blue-600">
            {aboutPageHero.title.split(",")[1]}
          </span>
        </Title>
        <Seals />
      </Container>
    </section>
  );
};

export default AboutUsPageHero;
