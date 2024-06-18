import {
  BrandThatTrustUs,
  EmpowerDiverseSection,
  IndustriesHero,
} from "@/components";
import { TRUSTED_BRAND_SECTION } from "@/constants";

type Props = {};

const Industries = (props: Props) => {
  return (
    <main>
      <IndustriesHero />
      <div className="w-full bg-grey-alt-1 pb-[5.5rem] pt-[1.6rem]">
        <BrandThatTrustUs
          title={TRUSTED_BRAND_SECTION.title}
          images={TRUSTED_BRAND_SECTION.images}
        />
      </div>
      <EmpowerDiverseSection />
    </main>
  );
};

export default Industries;
