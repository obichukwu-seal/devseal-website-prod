import { BodyText, Container, Title } from "@/components/atom";
import { MissionCard, SectionHeaders, VisionCard } from "@/components/molecule";
import { HOME_PAGE_CONTENTS } from "@/constants/home-page-data";
import React from "react";
import TheSeals from "../the-seals";

type Props = {};

const WhoWeAre = (props: Props) => {
  return (
    <Container className="space-y-[4.8rem]">
      <SectionHeaders
        title={HOME_PAGE_CONTENTS.sectionThree.sectionOne.title}
        body={HOME_PAGE_CONTENTS.sectionThree.sectionOne.body}
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[2.4rem]">
        <li>
          <VisionCard
            title={HOME_PAGE_CONTENTS.sectionThree.sectionOne.vision.title}
            body={HOME_PAGE_CONTENTS.sectionThree.sectionOne.vision.content}
          />
        </li>
        <li className="h-full">
          <MissionCard
            title={HOME_PAGE_CONTENTS.sectionThree.sectionOne.mission.title}
            body={HOME_PAGE_CONTENTS.sectionThree.sectionOne.mission.content}
          />
        </li>
      </ul>
      <TheSeals />
    </Container>
  );
};

export default WhoWeAre;
