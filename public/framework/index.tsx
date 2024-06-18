import { SVGProps } from "react";
import AspLogo from "./asp.svg";
import Bootstraplogo from "./bootstrap.svg";
import HibernateLogo from "./hibernate.svg";
import LaravelLogo from "./laravel.svg";
import SpringLogo from "./spring.svg";

type prop = SVGProps<SVGSVGElement>;

export const Asp = (props: prop) => {
  return <AspLogo {...props} />;
};
export const Bootstrap = (props: prop) => {
  return <Bootstraplogo {...props} />;
};
export const Hibernate = (props: prop) => {
  return <HibernateLogo {...props} />;
};

export const Laravel = (props: prop) => {
  return <LaravelLogo {...props} />;
};

export const Spring = (props: prop) => {
  return <SpringLogo {...props} />;
};
