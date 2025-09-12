import Image, { ImageProps } from "next/image";
import Image1 from "./robot-working-as-painter-instead-humans.jpg";
import Image2 from "./medium-shot-woman-djing-with-vr-glasses.jpg";
import image3 from "./futuristic-scene-with-high-tech-robot-used-construction-industry.jpg";
import image4 from "./business-leader-interviewing-job-candidate 1.jpg";
import image5 from "./mlops.jpg";
import image6 from "./ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg";
import HeroImage from "./AimlHeroImage.png"

type NewImageProp = Omit<ImageProps, "src" | "placeholder" | "alt">;

export const AimlHeroImage = (props: NewImageProp) => {
  return <Image src={HeroImage} alt="ai" placeholder={"empty"} {...props} />;
};

export const AimlImageOne = (props: NewImageProp) => {
  return <Image src={Image1} alt="" placeholder={"empty"} {...props} />;
};
export const AimlImageTwo = (props: NewImageProp) => {
  return <Image src={Image2} alt="" placeholder={"blur"} {...props} />;
};

export const AimlImageThree = (props: NewImageProp) => {
  return <Image src={image3} alt="" placeholder={"blur"} {...props} />;
};

export const AimlImageFour = (props: NewImageProp) => {
  return <Image src={image4} alt="" placeholder={"blur"} {...props} />;
};
export const AimlImageFive = (props: NewImageProp) => {
  return <Image src={image5} alt="" placeholder={"blur"} {...props} />;
};
export const AimlImageSix = (props: NewImageProp) => {
  return <Image src={image6} alt="" placeholder={"blur"} {...props} />;
};

export {image3, image4, image5, image6, Image1, Image2}