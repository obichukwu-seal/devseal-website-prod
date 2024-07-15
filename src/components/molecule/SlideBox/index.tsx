"use client";
import { BodyText, Card, Column, NavLink } from "@/components/atom";
import { useMediaQuery } from "@/hooks";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
type DataType = {
  id: string;
  title: string;
  content: string;
  Image: StaticImageData;
};
type Props = {
  data: DataType[];
};

const SlideBox = ({ data, ...props }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  const [currentImage, setCurrentImage] = useState({
    index: 0,
    isHovered: true,
    Image: data[0].Image,
    content: data[0].content,
  });
  const handleSetImage = useCallback((data: any) => {
    setCurrentImage(data);
  }, []);

  const items = data?.map((item, index) => {
    return (
      <li
        key={item.id}
        onMouseOver={() => {
          handleSetImage({
            index: index,
            isHovered: true,
            Image: item.Image,
            content: item.content,
          });
        }}
      >
        <Card
          variant="unstyled"
          border="xs"
          rounded="sm"
          className={`${
            currentImage.isHovered && currentImage.index === index
              ? "bg-risd-blue-600"
              : "bg-transparent"
          } transition-colors duration-300 p-[2.4rem]`}
        >
          <BodyText
            className={`${
              currentImage.isHovered && currentImage.index === index
                ? "text-brandeis-alt-50"
                : "text-grey-600"
            } transition-colors duration-300`}
          >
            {item.title}
          </BodyText>
        </Card>
      </li>
    );
  });

  useEffect(() => {
    const slideTimeout = setTimeout(() => {
      if (!isAboveMediumScreens) {
        const randomNumber = Math.floor(Math.random() * data.length );
        setCurrentImage({
          index: randomNumber,
          isHovered: true,
          Image: data[randomNumber].Image,
          content: data[randomNumber].content,
        });
      }
    }, 100);
    return () => clearTimeout(slideTimeout);
  }, [ isAboveMediumScreens,data]);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[12.6rem]">
      <ul className="hidden md:block space-y-[2.4rem]">{items}</ul>
      <figure className="w-full h-full overflow-hidden relative rounded-lg">
        <Column className="absolute bottom-20 w-full gap-[1.6rem] px-[2.4rem] left-1/2 -translate-x-1/2">
          <BodyText className="text-white">{currentImage.content}</BodyText>
          <NavLink href={"#"} className="text-risd-blue-200">
            Talk to a seal
          </NavLink>
        </Column>
        <Image
          src={currentImage.Image}
          alt=""
          placeholder={"blur"}
          className="w-full h-full object-cover"
        />
      </figure>
    </div>
  );
};

export default SlideBox;
