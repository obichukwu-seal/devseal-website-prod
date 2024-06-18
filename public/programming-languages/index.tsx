import { SVGProps } from "react";
import JavaSvgLogo from "./java.svg";
import PythonSvgLogo from "./python.svg";
import RubySvgLogo from "./ruby.svg";
import NodeSvg0Logo from "./node.svg";
import SwiftSvg0Logo from "./swift.svg";

type prop = SVGProps<SVGSVGElement>;

export const JavaSvg = (props: prop) => {
  return <JavaSvgLogo {...props} />;
};
export const PythonSvg = (props: prop) => {
  return <PythonSvgLogo {...props} />;
};
export const RubySvg = (props: prop) => {
  return <RubySvgLogo {...props} />;
};

export const NodeSvg0 = (props: prop) => {
  return <NodeSvg0Logo {...props} />;
};

export const SwiftSvg0 = (props: prop) => {
  return <SwiftSvg0Logo {...props} />;
};
