import Image, { ImageProps } from "next/image";
import fintechImage from "./fin-tech.png";
import proptechImage from "./proptech.png";
import healthCareImage from "./health-care.png";
import telecommunicationImage from "./telecommunications.png";
import insuranceImage from "./insurance.png";
import foodBeverage from './food-beverage.png'
import hospitalityImage from './hospitality.png'
import ecommerceImage from './ecommerce.png'

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

export const HealthCareImage = (props: NewImageProp) => (
  <Image
    src={healthCareImage}
    alt="Healthcare"
    placeholder="blur"
    {...props}
  />
);
export const InsuranceImage = (props: NewImageProp) => (
  <Image
    src={insuranceImage}
    alt="Healthcare"
    placeholder="blur"
    {...props}
  />
);

export const FoodAndBeverageImage = (props: NewImageProp) => (
  <Image
    src={foodBeverage}
    alt="Food and Beverage"
    placeholder="blur"
    {...props}
  />
);

export const HospitalityImage= (props: NewImageProp) => (
  <Image
    src={hospitalityImage}
    alt="Hospitality"
    placeholder="blur"
    {...props}
  />
);

export const EcommerceImage= (props: NewImageProp) => (
  <Image
    src={ecommerceImage}
    alt="Hospitality"
    placeholder="blur"
    {...props}
  />
);