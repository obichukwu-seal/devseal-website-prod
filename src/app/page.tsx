import { Aiml, BrandThatTrustUs, DataEngineering, HomepageHero, SolutionSeekers, WhatWeExcelAt, WhoWeAre } from "@/components";
import { TRUSTED_BRAND_SECTION } from "@/constants";

export default function Home() {
  return (
    <main>
      <HomepageHero />
      <Aiml/>
      <WhatWeExcelAt />
      <DataEngineering/>
      <SolutionSeekers/>
      <div className="w-full bg-grey-alt-2 py-[6.4rem]">
        <WhoWeAre/>
      </div>
    </main>
  );
}
