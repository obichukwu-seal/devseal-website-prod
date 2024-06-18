import { SVGProps } from "react";
import AndriodLogo from "./andriod.svg";
import ApacheLogo from "./apache.svg";
import ReactLogo from "./react.svg";
import SwiftSvgLogo from "./swift.svg";


type prop = SVGProps<SVGSVGElement>;

export const Andriod = (props: prop) => {
  return <AndriodLogo {...props} />;
};
export const Apache = (props: prop) => {
  return <ApacheLogo {...props} />;
};
export const ReactSvg = (props: prop) => {
  return <ReactLogo {...props} />;
};

export const SwiftSvg1 = (props: prop) => {
  return <SwiftSvgLogo {...props} />;
};

