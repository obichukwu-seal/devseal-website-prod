"use client";
import React, { useEffect, useState } from "react";
import { NewImageProp } from "@/public/index";
import { Column, Row, SlideButton } from "@/components/atom";
import HeroHeadingTitle from "../Hero-Heading-title";
import { HOME_PAGE_CONTENTS } from "@/constants/home-page-data";

type Images = (prop: NewImageProp) => JSX.Element;
type Props = {
  images: Record<string, Images>;
};
const SLIDE_TIMEOUT = 5000;
const HeroSlider = ({ images, ...props }: Props) => {
  const [slideTimeout, setSlideTimeout] = useState(0);

  const image = Object.values(images).map((Img, idx) => (
    <Img
      key={idx}
      className={`absolute top-0 left-0 w-full h-full ${slideTimeout === idx ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 object-cover`}
    />
  ));

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideTimeout((prev) => (prev + 1) % Object.values(images).length);
    }, SLIDE_TIMEOUT);
    return () => clearTimeout(timer); // cleanup function to prevent memory leak
  }, [slideTimeout, images]);

  const handleSingleSlide = (idx: number) => {
    setSlideTimeout(idx);
    console.log("calling");
  };
  const FirstImage = Object.values(images)[0];
  return (
    <>
      <figure className={"absolute top-0 w-full h-full bg-black overflow-hidden " + (Object.values(images).length > 1 ? '-z-0' : '-z-10')}>
        {Object.values(images).length > 1 && <div className="absolute z-[100] h-full w-full">

          <Column className="h-full min-h-[65svh] justify-center mx-auto max-w-[120rem]">
            <HeroHeadingTitle
              title={HOME_PAGE_CONTENTS.hero.titles[slideTimeout]}
              subtitle={HOME_PAGE_CONTENTS.hero.subtitle}
              type="left"
              cta={HOME_PAGE_CONTENTS.hero.cta[slideTimeout]}
            />
          </Column>
        </div>}
        {Object.values(images).length > 1 && (
          <div className="relative w-full h-full">{image}</div>
        )}
        {Object.values(images).length <= 1 && <FirstImage className="w-full h-full object-cover" />}
      </figure>
      <ul>
        <Row className="items-center absolute bottom-10 left-1/2 -translate-x-1/2 gap-[.8rem]">
          {Object.values(images).map((ImageEl, idx) => {
            return (
              <li key={idx} className="z-50">
                <ImageEl className="hidden" />
                {Object.values(images).length <= 1 ? null : (
                  <SlideButton
                    isActive={idx === slideTimeout}
                    onClick={() => handleSingleSlide(idx)}
                  />
                )}
              </li>
            );
          })}
        </Row>
      </ul>
    </>
  );
};

export default HeroSlider;
