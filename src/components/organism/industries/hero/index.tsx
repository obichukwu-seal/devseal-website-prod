import { Container } from "@/components/atom";
import { HeroHeadingTitle } from "@/components/molecule";
import { INDUSTRIES_PAGE_CONTENT } from "@/constants";

type Props = {};

const IndustriesHero = (props: Props) => {
  const industriesHero = INDUSTRIES_PAGE_CONTENT.hero;
  const IndustriesHeroImage = industriesHero.image;
  return (
    <section className="bg-grey-alt-2 pt-[8rem]">
      <Container className="mb-[6.8rem]">
        <HeroHeadingTitle
          title={industriesHero.title}
          label={industriesHero.label}
          subtitle={industriesHero.content}
        />
      </Container>
      <IndustriesHeroImage />
    </ section>
  );
};

export default IndustriesHero;
