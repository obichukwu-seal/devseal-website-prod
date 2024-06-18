import { Card, Center } from "@/components/atom";
import { DevSealLogoOutlinedReducedOpacity, DevSealLogoReducedOpacity, SealImage } from "@/public/index";
import React from "react";

type Props = {};

const Seals = (props: Props) => {
  return (
    <Card variant="secondary" className="overflow-hidden relative z-10 max-h-[51.2rem]" rounded="xs">
      <Center className="z-10">
        <figure>
          <SealImage />
        </figure>
      </Center>
      <figure className="absolute top-0 -left-[38rem] rotate-[90deg] w-full -z-10">
        <DevSealLogoReducedOpacity className="w-[90%]" />
      </figure>
      <figure className="absolute top-0 -right-[42rem] w-full -z-10">
        <DevSealLogoOutlinedReducedOpacity className="w-[70%]"/>
      </figure>
    </Card>
  );
};

export default Seals;
