"use client";
import { Column, Container } from "@/components/atom";
import { HeroHeadingTitle, HeroSlider } from "@/components/molecule";
import { AI_ML_CONTENTS, DATA_MANAGEMENT_CONTENTS } from "@/constants";

type Props = {};

const DataManagementHero = (props: Props) => {
  const HeroImage = DATA_MANAGEMENT_CONTENTS.hero.image;
  return (
    <section className="relative min-h-[90svh] w-full h-full ">
      {/* <div className="w-full h-full absolute  top-0 bg-gradient-to-r from-black to-[#00000041] -z-10"></div> */}
      <Container className=" h-full min-h-[90svh] z-50">
        <Column className="h-full min-h-[90svh] justify-center z-50">
          <HeroHeadingTitle
            title={DATA_MANAGEMENT_CONTENTS.hero.title}
            subtitle={DATA_MANAGEMENT_CONTENTS.hero.subtitle}
            type="left"
            cta={DATA_MANAGEMENT_CONTENTS.hero.cta}
          />
        </Column>

      </Container>
      <HeroSlider images={HeroImage} />
    </section>
  );
};

export default DataManagementHero;
