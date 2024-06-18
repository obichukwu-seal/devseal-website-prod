import { Container } from "@/components/atom";
import { SectionHeaders, UtilityCardV1 } from "@/components/molecule";
import { ABOUT_PAGE_CONTENT } from "@/constants";
import React from "react";

type Props = {};

const Tied = (props: Props) => {
    const cardItem = ABOUT_PAGE_CONTENT.sectionThree.list.map(({body,icon:Icon,id,title})=>(<li key={id}>
        <UtilityCardV1 variant="transparent" icon={<Icon/>} title={title} body={body} className="bg-white"/>
    </li>))
  return (
    <section className="w-full bg-grey-alt-2 pt-[4rem] pb-[5.6rem]">
      <Container className="space-y-[4rem]">
        <SectionHeaders title={ABOUT_PAGE_CONTENT.sectionThree.title}/>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[2.4rem]">
            {cardItem}
        </ul>
      </Container>
    </section>
  );
};

export default Tied;
