import { Container } from "@/components/atom";
import { SectionHeaders, UtiltityCardV2 } from "@/components/molecule";
import { INDUSTRIES_PAGE_CONTENT } from "@/constants";
import React from "react";

type Props = {};

const EmpowerDiverseSection = (props: Props) => {
  const industriesSection = INDUSTRIES_PAGE_CONTENT.sectionOne;
  const empoerCards = industriesSection.items.map(
    ({ body, id, image: ItemImage, title }) => (
      <li key={id}>
        <UtiltityCardV2 title={title} body={body} cardImage={<ItemImage />} />
      </li>
    )
  );
  return (
    <section className="w-full bg-grey-alt-2 pt-[4rem] pb-[6.4rem] ">
      <Container className="space-y-[1.4rem] ">
        <div className="w-[48.6rem]">
        <SectionHeaders
          title={industriesSection.title}
          body={industriesSection.content}
        />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[2.4rem]">
          {empoerCards}
        </ul>
      </Container>
    </section>
  );
};

export default EmpowerDiverseSection;
