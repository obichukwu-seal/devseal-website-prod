import { BodyText, Container, Row, Title } from "@/components/atom";
import { SectionHeaders, UtilityCardV1 } from "@/components/molecule";
import { SERVICE_PAGE_CONTENTS } from "@/constants";
import { CheckMarkIcon } from "@/public/Home-page-images";

type Props = {};

const DataEngineering = (props: Props) => {
  const DataEngineeringContents =
    SERVICE_PAGE_CONTENTS.sectionTwo.subSectionTwo;
  const DataEngineeringCard = DataEngineeringContents.list.map(
    ({ items, id, title }, index) => (
      <li key={id}>
        <UtilityCardV1
          className="hover:bg-risd-blue-700 group/data transition-colors duration-300"
          title={title}
          titleClassName="group-hover/data:text-brandeis-blue-50"
          body={
            <ul className="mt-[2.4rem] gap-[.8rem]">
              {items.map((item, index) => (
                <li key={index}>
                  <Row className="gap-[.8rem] items-center">
                    <CheckMarkIcon className="group-hover/data:fill-brandeis-blue-50  fill-grey-400 transition-all duration-300" />
                    <BodyText
                      variant="sm"
                      className="text-grey-700 leading-[2.4rem] group-hover/data:text-grey-100 font-[400] mt-[.8rem]"
                    >
                      {item}
                    </BodyText>
                  </Row>
                </li>
              ))}
            </ul>
          }
        />
      </li>
    )
  );
  return (
    <Container className="space-y-[3.2rem]">
      <SectionHeaders title={DataEngineeringContents.title} className="pb-0"/>
      <Title variant="sm"
        className="text-grey-700 leading-[2.4rem] group-hover/data:text-grey-100 font-[400] mt-[.8rem]"> {DataEngineeringContents.subTitle} </Title>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2.4rem]">
        {DataEngineeringCard}
      </ul>
    </Container>
  );
};

export default DataEngineering;
