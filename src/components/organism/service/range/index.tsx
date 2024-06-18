import { BodyText, Container, Row } from "@/components/atom";
import { SectionHeaders, UtilityCardV1 } from "@/components/molecule";
import { SERVICE_PAGE_CONTENTS } from "@/constants";

type Props = {};

const Range = (props: Props) => {
  const rangeContents = SERVICE_PAGE_CONTENTS.sectionTwo.subSectionOne;
  const rangeCard = rangeContents.list.map(
    ({ content, id, image: images, title }, index) => (
      <li key={id}>
        <UtilityCardV1
          title={title}
          body={<BodyText variant="sm">{content}</BodyText>}
          footer={
            <ul>
              <Row className="items-center flex-wrap gap-[1.6rem]">
                {images.map((FooterImage, index) => (
                  <li key={index}>
                    <figure>
                      <FooterImage />
                    </figure>
                  </li>
                ))}
              </Row>
            </ul>
          }
        />
      </li>
    )
  );
  return (
    <Container className="space-y-[3.2rem]">
      <SectionHeaders title={rangeContents.title} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2.4rem]">
        {rangeCard}
      </ul>
    </Container>
  );
};

export default Range;
