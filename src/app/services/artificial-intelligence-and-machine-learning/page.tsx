import { AimlDevelopmentService, AimlHero, DataEngineering } from "@/components";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <AimlHero />
      <AimlDevelopmentService/>
      <DataEngineering/>
    </main>
  );
};

export default page;
