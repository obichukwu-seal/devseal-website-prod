import Image, { ImageProps } from "next/image";
import image1 from "./medium-shot-latin-friends-hanging-out.jpg";
import image2 from "./programming-background-collage.jpg";
import image3 from "./programming-background-with-person-working-with-codes-computer.jpg";
import image4 from "./software-programer-pointing-pencil-source-code-computer-screen-explaining-algorithm-coworker-standing-desk-programmers-discussing-online-cloud-computing-with-team.jpg";
import image5 from "./representation-user-experience-interface-design 1.jpg";
import HeroImage from "./services imagev2 1@3x.png"

type NewImageProp = Omit<ImageProps, "src" | "placeholder" | "alt">;

export const ProductServiceHero = (props: NewImageProp) => {
  return <Image src={HeroImage} alt="ai" placeholder={"empty"} {...props} />;
};

export const ProductImageOne = (props: NewImageProp) => {
  return <Image src={image1} alt="" placeholder={"empty"} {...props} />;
};
export const ProductImageTwo = (props: NewImageProp) => {
  return <Image src={image2} alt="" placeholder={"blur"} {...props} />;
};

export const ProductImageThree = (props: NewImageProp) => {
  return <Image src={image3} alt="" placeholder={"blur"} {...props} />;
};

export const ProductImageFour = (props: NewImageProp) => {
  return <Image src={image4} alt="" placeholder={"blur"} {...props} />;
};
export const ProductImageFive = (props: NewImageProp) => {
  return <Image src={image5} alt="" placeholder={"blur"} {...props} />;
};


export {image3, image4, image5, image1, image2}