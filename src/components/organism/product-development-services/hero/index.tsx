"use client";
import { Column, Container } from "@/components/atom";
import { HeroHeadingTitle, HeroSlider } from "@/components/molecule";
import { AI_ML_CONTENTS } from "@/constants";
import { PRODUCT_DEVELOPMENT_SERVICE } from "@/constants/product-development-services";

type Props = {};

const ProductHero = (props: Props) => {
  const HeroImage = PRODUCT_DEVELOPMENT_SERVICE.hero.image;
  const splitedTitle = PRODUCT_DEVELOPMENT_SERVICE.hero.title.split("'");
  return (
    <section className="relative min-h-[90svh] w-full h-full ">
      <Container className=" h-full min-h-[90svh] z-50">
        <Column className="h-full min-h-[90svh] justify-center z-50">
          <HeroHeadingTitle
            title={
              <>
                {splitedTitle[0]} 
                {<span className="text-risd-blue-200">{splitedTitle[1]}</span>}{" "}
                {splitedTitle[2]}
              </>
            }
            subtitle={PRODUCT_DEVELOPMENT_SERVICE.hero.subtitle}
            type="left"
            cta={PRODUCT_DEVELOPMENT_SERVICE.hero.cta}
          />
        </Column>
      </Container>
      <HeroSlider images={HeroImage} />
    </section>
  );
};

export default ProductHero;
