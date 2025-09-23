import { BodyText, Column, Container } from "@/components/atom";
import { SectionHeaders, UtilityCardV1 } from "@/components/molecule";
import { HOME_PAGE_CONTENTS } from "@/constants/home-page-data";
import React from "react";

type Props = {};

const Aiml = (props: Props) => {
  const PAGE_CONTENT = HOME_PAGE_CONTENTS.sectionFour;
  const aimlCard = PAGE_CONTENT.sectionItems.map(
    ({ content, Icon, id, title }, index) => (
      <li key={id}>
        <UtilityCardV1
          className="hover:bg-risd-blue-700 group/aiml transition-colors duration-300"
          icon={
            <Icon className="group-hover/aiml:fill-brandeis-blue-50  fill-grey-400 transition-all duration-300" />
          }
          titleClassName="group-hover/aiml:text-brandeis-blue-50"
          title={title}
          body={
            <BodyText
              variant="sm"
              className="text-grey-700 group-hover/aiml:text-grey-100 font-[400] mt-[.8rem]"
            >
              {content}
            </BodyText>
          }
        />
      </li>
    )
  );

  return (
    <div className="w-full  bg-grey-alt-2">
      <Container className=" pt-[4.7rem] pb-[5.6rem]">
      <span className="inline-block mb-4 bg-green-600/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-[1.4rem] font-medium">
        Services
      </span>
        <Column className="gap-[4.8rem]">
          <SectionHeaders title={PAGE_CONTENT.title} />
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2.4rem] list-none">
            {aimlCard}
          </ul>
        </Column>
      </Container>
    </div>
  );
};

export default Aiml;
