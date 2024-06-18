import { SVGProps } from "react";
import AndriodSvgLogo from "./andriod.svg";
import AngularSvgLogo from "./angular.svg";
import DotNetSvgLogo from "./dotNet.svg";
import CSharpLogo from "./c#.svg";
import NodeSvgLogo from "./node.svg";
import SwiftSvgLogo from "./swift.svg";

type prop = SVGProps<SVGSVGElement>;

export const AndriodSvg = (props: prop) => {
  return <AndriodSvgLogo {...props} />;
};
export const AngularSvg = (props: prop) => {
  return <AngularSvgLogo {...props} />;
};
export const DotNetSvg = (props: prop) => {
  return <DotNetSvgLogo {...props} />;
};

export const NodeSvg = (props: prop) => {
  return <NodeSvgLogo {...props} />;
};

export const CSharpSvg = (props: prop) => {
  return <CSharpLogo {...props} />;
};
export const SwiftSvg = (props: prop) => {
  return <SwiftSvgLogo {...props} />;
};
