import { Column, Container, Row, Title } from "@/components/atom";
import {
  BecomeASealCard,
  SectionHeaders,
  UtilityCard,
} from "@/components/molecule";
import { HOME_PAGE_CONTENTS } from "@/constants/home-page-data";
import { CheckMarkIcon } from "@/public/Home-page-images";
import React from "react";

type Props = {};

const WhatWeExcelAt = (props: Props) => {
  const whatWeExcelAtCard = HOME_PAGE_CONTENTS.sectionOne.sectionItems.map(
    (sectionItem) => {
      return (
        <UtilityCard
          variant={"transparent"}
          border="xs"
          className="px-[4rem] py-[3.2rem] min-h-[5.3rem] cursor-pointer transition-all duration-300 hover:bg-brandeis-blue-50 hover:border-risd-blue-600"
          key={sectionItem.id}
          title={sectionItem.title}
          body={
            <ul>
              <Column className="gap-[.8rem]">
                {sectionItem.Content.map((content, index) => (
                  <li key={index} className="flex gap-[.8rem]">
                    <CheckMarkIcon /> {content}
                  </li>
                ))}
              </Column>
            </ul>
          }
          footer={
            <ul className="w-full">
              <Row className="w-full flex-wrap gap-[3.2rem]">
                {sectionItem.images.map((ItemImage, index) => (
                  <li key={index}>
                    {" "}
                    <ItemImage />
                  </li>
                ))}
              </Row>
            </ul>
          }
        />
      );
    }
  );
  
  return (
    <div className="w-full bg-grey-alt-2">
      <Container className="pt-[4.7rem] pb-[5.6rem]">
        <Column className="gap-[4.8rem]">
          <SectionHeaders title={HOME_PAGE_CONTENTS.sectionOne.title} />
          <div className="grid grid-cols-1 gap-[2.4rem] sm:grid-cols-2">
            {whatWeExcelAtCard}
            <BecomeASealCard
              title={HOME_PAGE_CONTENTS.sectionOne.CTA.title}
              buttonText={HOME_PAGE_CONTENTS.sectionOne.CTA.button.text}
              href={HOME_PAGE_CONTENTS.sectionOne.CTA.button.link}
              size="lg"
            />
          </div>
        </Column>
      </Container>
    </div>
  );
};

export default WhatWeExcelAt;
