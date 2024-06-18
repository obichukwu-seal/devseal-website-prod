import { BodyText, Container, Row, Title } from "@/components/atom";
import { SERVICE_PAGE_CONTENTS } from "@/constants";

type Props = {};

const ServiceHero = (props: Props) => {
  const HeroImage = SERVICE_PAGE_CONTENTS.hero.image;
  return (
    <div className="w-full bg-brandeis-alt bg-seals-tertiary-100 z-10 h-full  py-20 sm:py-0 ">
      <Container className="h-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-6 items-center justify-between min-h-[60rem] h-full">
          <article className="max-w-[69rem] space-y-[1.4rem] lg:col-span-4">
            <Title variant="xl" className="text-risd-blue-900">
              {SERVICE_PAGE_CONTENTS.hero.title}
            </Title>
            <BodyText variant="md">
              {SERVICE_PAGE_CONTENTS.hero.subtitle}
            </BodyText>
          </article>
          <figure className="hidden self-end lg:block min-w-[38.4rem]  w-full overflow-hidden ">
            <HeroImage className="w-full"/>
          </figure>
        </div>
      </Container>
    </div>
  );
};

export default ServiceHero;
