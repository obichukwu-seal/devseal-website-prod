import Image, { ImageProps } from "next/image";
import Image1 from "./IMG 1.jpg";
import Image2 from "./1719568994631_110330.jpg";
import image3 from "./image2.jpg";
import Her1 from "./hero image.png"
import Her2 from "./her2.png"

type NewImageProp = Omit<ImageProps, "src" | "placeholder" | "alt">;

export const HomeImageOne = (props: NewImageProp) => {
  return <Image src={Her1} alt="" placeholder={"empty"} className={`${props.className} after:absolute relative  after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-risd-alt-1 after:to-transparent after:z-50`} {...props} />;
};
export const HomeImageTwo = (props: NewImageProp) => {
  return <Image src={Image2} alt="" placeholder={"blur"} {...props} />;
};

export const HomeImageThree = (props: NewImageProp) => {
  return <Image src={Her2} alt="" placeholder={"blur"} {...props} />;
};
