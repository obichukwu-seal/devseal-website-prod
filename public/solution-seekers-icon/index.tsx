
import { SVGProps } from "react";
import Business from "./business.svg";
import Rocket from "./rocket.svg";
import StoreFront from "./storefront.svg";


type prop = SVGProps<SVGSVGElement>;

export const BusinessIcon = (props: prop) => {
  return <Business {...props} />;
};

export const RocketIcon = (props: prop) => {
  return <Rocket {...props} />;
};

export const StoreFrontIcon = (props: prop) => {
  return <StoreFront {...props} />;
};

