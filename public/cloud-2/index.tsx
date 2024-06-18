import { SVGProps } from "react";
import AwsLogo from "./aws.svg";
import AzureLogo from "./azure.svg";
import DigitalOceanLogo from "./digitalOcean.svg";
import IBMLogo from "./ibm.svg";
import OracleLogo from "./oracle.svg";

type prop = SVGProps<SVGSVGElement>;

export const Aws2 = (props: prop) => {
  return <AwsLogo {...props} />;
};
export const Azure2 = (props: prop) => {
  return <AzureLogo {...props} />;
};
export const DigitalOcean = (props: prop) => {
  return <DigitalOceanLogo {...props} />;
};

export const Ibm = (props: prop) => {
  return <IBMLogo {...props} />;
};

export const Oracle = (props: prop) => {
  return <OracleLogo {...props} />;
};
