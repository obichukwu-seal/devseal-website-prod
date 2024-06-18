"use client";
import { BodyText, Container, Title } from "@/components/atom";
import {
  BecomeASealCard,
  DetailedProfileCard,
  ProfileCard,
  SectionHeaders,
} from "@/components/molecule";
import { HOME_PAGE_CONTENTS } from "@/constants/home-page-data";
import { useMediaQuery } from "@/hooks";
import { useCallback, useState } from "react";

type Props = {};

const TheSeals = (props: Props) => {
  const [isHovered, setIsHovered] = useState({
    index: 0,
    state: false,
  });

  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  const [positions, setPositions] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseEnter = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement>,
      isBigCard: boolean = true,
      index: number
    ) => {
      setIsHovered({
        index: index,
        state: true,
      });
      if (!isBigCard) {
        setPositions({
          x: Math.floor(e.clientX / e.currentTarget.clientWidth + 6),
          y: Math.floor((e.clientY / e.currentTarget.clientHeight) * 10),
        });
      }
    },
    []
  );

  const handleMouseLeave = useCallback((index: number) => {
    setIsHovered({
      index: index,
      state: false,
    });
  }, []);

  const seals = HOME_PAGE_CONTENTS.sectionThree.sectionTwo.list.map(
    (items, index) => {
      return (
        <li key={items.id} className="relative cursor-pointer">
          {/* {isAboveMediumScreens && (
            <DetailedProfileCard
              onMouseEnter={(e) => handleMouseEnter(e, true, index)}
              onMouseLeave={() => {
                handleMouseLeave(index);
              }}
              className={`absolute transition-all duration-500  ${
                isHovered.index === index && isHovered.state
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-0"
              } `}
              style={{
                top: "-" + positions.y + "rem",
                left: positions.x + "rem",
              }}
              position={items.position}
              name={items.name}
              src={items.image}
              about={items.aboutTheDeveloper}
            />
          )} */}
          <ProfileCard
            onMouseEnter={(e) => handleMouseEnter(e, false, index)}
            onMouseLeave={() => {
              handleMouseLeave(index);
            }}
            src={items.image}
            name={items.name}
            position={items.position}
          />
        </li>
      );
    }
  );

  return (
    <Container className="relative">
      <SectionHeaders
        titleClassName="text-risd-blue-600"
        title={HOME_PAGE_CONTENTS.sectionThree.sectionTwo.title}
      />
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-[2rem] w-full">
        <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 lg-:grid-cols-4 lg:col-span-3 gap-[1.8rem] ">
          {seals}
        </ul>
        <BecomeASealCard
          type="small"
          title={HOME_PAGE_CONTENTS.sectionThree.sectionTwo.callToAction.title}
          buttonText={
            HOME_PAGE_CONTENTS.sectionThree.sectionTwo.callToAction.button.text
          }
          href={
            HOME_PAGE_CONTENTS.sectionThree.sectionTwo.callToAction.button.link
          }
        />
      </section>
    </Container>
  );
};

export default TheSeals;
