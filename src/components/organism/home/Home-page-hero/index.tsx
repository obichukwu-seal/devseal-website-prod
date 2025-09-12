"use client";
import { Column, Container } from "@/components/atom";
import { HeroHeadingTitle, HeroSlider } from "@/components/molecule";
import { HOME_PAGE_CONTENTS } from "@/constants/home-page-data";
import { SealLogoWhite } from "@/public/index";
type Props = {};

const HomeHero = (props: Props) => {
  const HeroImage = HOME_PAGE_CONTENTS.hero.image;
  return (
    <section className="relative min-h-[65svh] w-full h-full ">
      {/* <div className="bg-risd-blue-500 hidden lg:flex items-center gap-10 justify-between px-20  absolute bottom-0 rounded-tr-full text-white left-0 w-[40%] py-10 z-[999]">
        <SealLogoWhite/>
        <SealLogoWhite/>
        <SealLogoWhite/>
      </div> */}
      {/* <div className="bg-risd-blue-500 hidden lg:flex items-center gap-10 justify-between px-20  absolute bottom-0 rounded-tl-full text-white right-0 w-[40%] py-10 z-[999]">
      <SealLogoWhite/>
      </div> */}
      {/* <div className="w-full h-full absolute  top-0 bg-gradient-to-r from-black to-[#00000041] -z-10"></div> */}
      <Container className=" h-full min-h-[65svh] z-50">
        <Column className="h-full min-h-[90svh] justify-center z-50">
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
