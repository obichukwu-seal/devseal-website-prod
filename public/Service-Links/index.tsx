import { SVGProps } from "react";
import Terminal from "./terminal.svg";
import Rocket from "./rocket.svg";


type prop = SVGProps<SVGSVGElement>;

export const TerminalSvg = (props: prop) => {
  return <Terminal {...props} />;
};
export const RocketSvg = (props: prop) => {
  return <Rocket {...props} />;
};

