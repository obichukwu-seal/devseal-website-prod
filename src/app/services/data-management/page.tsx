import { DataManagementHero,DataManagementService  } from "@/components";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <DataManagementHero />
      <DataManagementService/>

    </main>
  );
};

export default page;
