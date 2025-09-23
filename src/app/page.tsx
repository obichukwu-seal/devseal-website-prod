import {
  Aiml,
  DataEngineering,
  HomepageHero,
  ProductSec,
  SolutionSeekers,
  WhatWeExcelAt,
  WhoWeAre,
} from "@/components";

export default function Home() {
  return (
    <main>
      <HomepageHero />
      <Aiml />
      <WhatWeExcelAt />
      <ProductSec />
      <DataEngineering />
      <SolutionSeekers />
   
      <div className="w-full bg-grey-alt-2 py-[6.4rem]">
        <WhoWeAre />
      </div>
    </main>
  );
}
