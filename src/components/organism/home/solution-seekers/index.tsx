import { BodyText, Container, Title } from "@/components/atom";
import { SectionHeaders, UtilityCardV1 } from "@/components/molecule";
import { HOME_PAGE_CONTENTS } from "@/constants/home-page-data";
import React from "react";

type Props = {};

const SolutionSeekers = (props: Props) => {
  const solutionCards = HOME_PAGE_CONTENTS.sectionTwo.list.map(
    ({ content, icon: Icon, id, title }, index) => (
      <li key={id}>
        <UtilityCardV1
          icon={<Icon />}
          title={title}
          body={
            <BodyText variant="sm" className="text-grey-700 font-[400]">
              {content}
            </BodyText>
          }
        />
      </li>
    )
  );
  return (
    <div className="bg-grey-alt-2 pt-[14.2rem] pb-[5.6rem]">
      <Container className="space-y-[6.2rem]">
        <SectionHeaders title={HOME_PAGE_CONTENTS.sectionTwo.title} />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2.4rem]">
          {solutionCards}
        </ul>
      </Container>
    </div>
  );
};

export default SolutionSeekers;
