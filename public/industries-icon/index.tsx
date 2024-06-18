import { SVGProps } from "react";
import Bitcoin from "./bitcoin-(btc).svg";
import Car from "./car.svg";
import CpuSettings from "./cpu-setting.svg";
import Crane from "./crane.svg";
import DollarCircle from "./dollar-circle.svg";
import Hospital from "./hospital.svg";
import ShoppingCart from "./shopping-cart.svg";
import TruckFast from "./truck-fast.svg";

type prop = SVGProps<SVGSVGElement>;

export const BitcoinSvg = (props: prop) => {
  return <Bitcoin {...props} />;
};
export const CarSvg = (props: prop) => {
  return <Car {...props} />;
};
export const CpuSettingsSvg = (props: prop) => {
  return <CpuSettings {...props} />;
};

export const CraneSvg = (props: prop) => {
  return <Crane {...props} />;
};

export const DollarCircleSvg = (props: prop) => {
  return <DollarCircle {...props} />;
};

export const HospitalSvg = (props: prop) => {
  return <Hospital {...props} />;
};

export const ShoppingCartSvg = (props: prop) => {
  return <ShoppingCart {...props} />;
};

export const TruckFastSvg = (props: prop) => {
  return <TruckFast {...props} />;
};
