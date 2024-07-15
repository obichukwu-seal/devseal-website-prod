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
          className="hover:bg-risd-blue-700 group/solution transition-colors duration-300"
          icon={<Icon  className="group-hover/solution:fill-brandeis-blue-50  fill-grey-400 transition-all duration-300" />}
          title={title}
          titleClassName="group-hover/solution:text-brandeis-blue-50 transition-colors duration-300"
          body={
            <BodyText variant="sm" className="text-grey-700 group-hover/solution:text-grey-100 transition-colors duration-300 font-[400] mt-[.8rem]">
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
