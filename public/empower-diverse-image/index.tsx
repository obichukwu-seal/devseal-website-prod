import Image, { ImageProps } from "next/image";
import fintechImage from "./fintech.jpg";
import proptechImage from "./proptech.jpg";
import telecommunicationImage from "./telecommunication.jpg";

type NewImageProp = Omit<ImageProps, "src" | "placeholder" | "alt">;

export const FinTechImage = (props: NewImageProp) => (
  <Image
    src={fintechImage}
    alt="financial technology"
    placeholder="blur"
    {...props}
  />
);
export const PropTechImage = (props: NewImageProp) => (
  <Image
    src={proptechImage}
    alt="Property technology"
    placeholder="blur"
    {...props}
  />
);
export const TelecommunicationsImage = (props: NewImageProp) => (
  <Image
    src={telecommunicationImage}
    alt="Telecommunication"
    placeholder="blur"
    {...props}
  />
);
