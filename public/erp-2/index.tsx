import { SVGProps } from "react";
import Dynamic365Logo from "./dynamic365.svg";
import MongoDb3Logo from "./mongoDB.svg";
import Odoo3Logo from "./odoo.svg";
import Oracle4Logo from "./oracle.svg";
import Sap3Logo from "./sap.svg";

type prop = SVGProps<SVGSVGElement>;

export const Dynamic365 = (props: prop) => {
  return <Dynamic365Logo {...props} />;
};
export const MongoDb3 = (props: prop) => {
  return <MongoDb3Logo {...props} />;
};
export const Odoo3 = (props: prop) => {
  return <Odoo3Logo {...props} />;
};

export const Oracle4 = (props: prop) => {
  return <Oracle4Logo {...props} />;
};

export const Sap3 = (props: prop) => {
  return <Sap3Logo {...props} />;
};
