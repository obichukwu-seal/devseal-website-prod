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
          title={title}
          body={
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <Row className="gap-[.8rem]">
                    <CheckMarkIcon />
                    <BodyText variant="sm">{item}</BodyText>
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
      <SectionHeaders title={DataEngineeringContents.title}/>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2.4rem]">
        {DataEngineeringCard}
      </ul>
    </Container>
  );
};

export default DataEngineering;
