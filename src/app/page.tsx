import { BrandThatTrustUs, HomepageHero, SolutionSeekers, WhatWeExcelAt, WhoWeAre } from "@/components";
import { TRUSTED_BRAND_SECTION } from "@/constants";

export default function Home() {
  return (
    <main>
      <HomepageHero />
      <div className="w-full bg-grey-alt-1 pb-[5.5rem] pt-[1.6rem]">
        <BrandThatTrustUs
          title={TRUSTED_BRAND_SECTION.title}
          images={TRUSTED_BRAND_SECTION.images}
        />
      </div>
      <WhatWeExcelAt />
      <SolutionSeekers/>
      <div className="w-full bg-grey-alt-2 py-[6.4rem]">
        <WhoWeAre/>
      </div>
    </main>
  );
}
