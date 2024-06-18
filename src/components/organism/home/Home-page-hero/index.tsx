import { Column, Container } from "@/components/atom";
import { HeroHeadingTitle } from "@/components/molecule";
import { HOME_PAGE_CONTENTS } from "@/constants/home-page-data";

type Props = {};

const HomeHero = (props: Props) => {
  const HeroImage = HOME_PAGE_CONTENTS.hero.image;
  return (
    <Container className="mt-[6.3rem] mb-[9.2rem]">
      <Column className="items-center gap-[9.2rem] justify-center">
        <HeroHeadingTitle
          title={HOME_PAGE_CONTENTS.hero.title}
          subtitle={HOME_PAGE_CONTENTS.hero.subtitle}
        />
        <figure className="w-full overflow-hidden rounded-[2rem]">
          <HeroImage className="w-full h-full object-cover" />
        </figure>
      </Column>
    </Container>
  );
};

export default HomeHero;
