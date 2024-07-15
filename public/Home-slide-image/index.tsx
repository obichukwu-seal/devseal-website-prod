import Image, { ImageProps } from "next/image";
import Image1 from "./IMG 1.jpg";
import Image2 from "./1719568994631_110330.jpg";
import image3 from "./image2.jpg";

type NewImageProp = Omit<ImageProps, "src" | "placeholder" | "alt">;

export const HomeImageOne = (props: NewImageProp) => {
  return <Image src={Image1} alt="" placeholder={"empty"} {...props} />;
};
export const HomeImageTwo = (props: NewImageProp) => {
  return <Image src={Image2} alt="" placeholder={"blur"} {...props} />;
};

export const HomeImageThree = (props: NewImageProp) => {
  return <Image src={image3} alt="" placeholder={"blur"} {...props} />;
};
