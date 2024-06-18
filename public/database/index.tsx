import { SVGProps } from "react";
import Oracle1Logo from "./oracle.svg";
import SqlServerLogo from "./sqlserver.svg";
import AzureDataLakeLogo from "./azureDataLake.svg";
import MySqlLogo from "./mysql.svg";

type prop = SVGProps<SVGSVGElement>;

export const Oracle1 = (props: prop) => {
  return <Oracle1Logo {...props} />;
};
export const SqlServer = (props: prop) => {
  return <SqlServerLogo {...props} />;
};
export const AzureDataLake1 = (props: prop) => {
  return <AzureDataLakeLogo {...props} />;
};


export const MySql1 = (props: prop) => {
  return <MySqlLogo {...props} />;
};
