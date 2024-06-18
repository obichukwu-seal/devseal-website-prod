import Image, { ImageProps } from "next/image";
import { SVGProps } from "react";

type prop = SVGProps<SVGSVGElement>;
type NewImageProp = Omit<ImageProps, "src" | "placeholder" | "alt">;
import HeroImage from './HomePageHero.jpg'
import CheckMark from './checkmark-done.svg'


export const CheckMarkIcon = (props: prop) => {
  return <CheckMark {...props} />;
};
export const HomepageHeroImage = (props: NewImageProp) => {
    return (
      <Image
        src={HeroImage}
        alt="Software Engineer"
        placeholder={"empty"}
        {...props}
      />
    );
  };