import { Container, Title } from "@/components/atom";
import { Seals } from "@/components/molecule";
import { ABOUT_PAGE_CONTENT } from "@/constants";
import React from "react";

type Props = {};

const AboutUsPageHero = (props: Props) => {
  const aboutPageHero = ABOUT_PAGE_CONTENT.hero;
  return (
    <section className="py-[6.4rem] bg-grey-alt-2">
      <Container className="space-y-[6.4rem]">
        <Title variant="xl" className="max-w-[89.4rem]">
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
