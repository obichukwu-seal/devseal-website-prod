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
      <EmpowerDiverseSection />
    </main>
  );
};

export default Industries;
