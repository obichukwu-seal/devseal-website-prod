"use client";
import { Column, Container } from "@/components/atom";
import { HeroHeadingTitle, HeroSlider } from "@/components/molecule";
import { HOME_PAGE_CONTENTS } from "@/constants/home-page-data";
type Props = {};

const HomeHero = (props: Props) => {
  const HeroImage = HOME_PAGE_CONTENTS.hero.image;
  return (
    <section className="relative min-h-[65svh] w-full h-full ">
      {/* <div className="w-full h-full absolute  top-0 bg-gradient-to-r from-black to-[#00000041] -z-10"></div> */}
      <Container className=" h-full min-h-[65svh] z-50">
        <Column className="h-full min-h-[65svh] justify-center z-50">
          {/* <HeroHeadingTitle
            title={HOME_PAGE_CONTENTS.hero.title}
            subtitle={HOME_PAGE_CONTENTS.hero.subtitle}
            type="left"
            cta={HOME_PAGE_CONTENTS.hero.cta}
          /> */}
        </Column>

      </Container>
      <HeroSlider images={HeroImage} />
    </section>
  );
};

export default HomeHero;
