import {
  BrandThatTrustUs,
  OurServices,
  Range,
  ServiceHero,
  DataEngineering,
} from "@/components";
import { TRUSTED_BRAND_SECTION } from "@/constants";

type Props = {};

const Services = (props: Props) => {
  return (
    <main>
      <ServiceHero />
      <section className="w-full bg-grey-alt-1 pb-[5.5rem] pt-[1.6rem]">
        <BrandThatTrustUs
          title={TRUSTED_BRAND_SECTION.title}
          images={TRUSTED_BRAND_SECTION.images}
        />
      </section>
      <OurServices />
      <section className="w-full space-y-[12rem] bg-grey-alt-2 py-[4.8rem]">
        <Range />
        <DataEngineering />
      </section>
    </main>
  );
};

export default Services;
