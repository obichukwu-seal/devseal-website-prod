import { SVGProps } from "react";
import PostGreSqlLogo from "./postGreSql.svg";
import OdooLogo from "./odoo.svg";
import Oracle0Logo from "./oracle.svg";
import Sap0Logo from "./sap.svg";
import SqlLogo from "./sql.svg";

type prop = SVGProps<SVGSVGElement>;

export const PostGreSql = (props: prop) => {
  return <PostGreSqlLogo {...props} />;
};
export const Odoo = (props: prop) => {
  return <OdooLogo {...props} />;
};
export const Oracle0 = (props: prop) => {
  return <Oracle0Logo {...props} />;
};

export const Sap = (props: prop) => {
  return <Sap0Logo {...props} />;
};

export const Sql = (props: prop) => {
  return <SqlLogo {...props} />;
};
