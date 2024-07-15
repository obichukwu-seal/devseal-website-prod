import { SVGProps } from "react";
import Terminal from "./terminal.svg";
import Rocket from "./rocket.svg";
import DataManagement from './data-management.svg'


type prop = SVGProps<SVGSVGElement>;

export const TerminalSvg = (props: prop) => {
  return <Terminal {...props} />;
};
export const RocketSvg = (props: prop) => {
  return <Rocket {...props} />;
};

export const DataManagementSvg = (props: prop) => {
  return <DataManagement {...props} />;
};