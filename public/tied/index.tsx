import { SVGProps } from "react";
import Compass from "./compass.svg";
import Diamond from "./diamond.svg";
import Hammer from "./hammer.svg";
import Shield from "./shield-half.svg";

type prop = SVGProps<SVGSVGElement>;

export const CompassIcon = (props: prop) => {
  return <Compass {...props} />;
};
export const DiamondIcon = (props: prop) => {
  return <Diamond {...props} />;
};

export const HammerIcon = (props: prop) => {
  return <Hammer {...props} />;
};

export const ShieldIcon = (props: prop) => {
  return <Shield {...props} />;
};
