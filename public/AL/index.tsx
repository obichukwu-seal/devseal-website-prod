import { SVGProps } from "react";
import BulbSvg from "./bulb.svg";
import ColorWandSvg from "./color-wand.svg";
import ExtensionPuzzleSvg from "./extension-puzzle.svg";
import EyeSvg from "./eye.svg";
import ServerSvg from "./server.svg";
import SpeedoMeterSvg from "./speedometer.svg";

type prop = SVGProps<SVGSVGElement>;

export const BulbSvgIcon = (props: prop) => {
  return <BulbSvg {...props} />;
};

export const ColorWandSvgIcon = (props: prop) => {
  return <ColorWandSvg {...props} />;
};

export const ExtensionPuzzleSvgIcon = (props: prop) => {
  return <ExtensionPuzzleSvg {...props} />;
};

export const EyeSvgIcon = (props: prop) => {
  return <EyeSvg {...props} />;
};

export const ServerSvgIcon = (props: prop) => {
  return <ServerSvg {...props} />;
};

export const SpeedoMeterSvgIcon = (props: prop) => {
  return <SpeedoMeterSvg {...props} />;
};
