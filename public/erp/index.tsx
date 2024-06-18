import { SVGProps } from "react";
import DynamicLogo from "./dynamic.svg";
import Oracle2Logo from "./oracle.svg";
import Sap2Logo from "./sap.svg";

type prop = SVGProps<SVGSVGElement>;

export const Dynamic = (props: prop) => {
  return <DynamicLogo {...props} />;
};
export const Oracle2 = (props: prop) => {
  return <Oracle2Logo {...props} />;
};
export const Sap2 = (props: prop) => {
  return <Sap2Logo {...props} />;
};
