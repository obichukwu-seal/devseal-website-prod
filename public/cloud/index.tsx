import { SVGProps } from "react";
import AwsLogo from "./aws.svg";
import AzureLogo from "./azure.svg";
import DockerLogo from "./docker.svg";
import KubernetesLogo from "./kubernetes.svg";
import OpenStackLogo from "./openstack.svg";
import ParkerLogo from "./parker.svg";
import TerraFormLogo from "./terraform.svg";

type prop = SVGProps<SVGSVGElement>;

export const Aws = (props: prop) => {
  return <AwsLogo {...props} />;
};
export const Azure = (props: prop) => {
  return <AzureLogo {...props} />;
};
export const Docker = (props: prop) => {
  return <DockerLogo {...props} />;
};

export const Kubernetes = (props: prop) => {
  return <KubernetesLogo {...props} />;
};

export const OpenStack = (props: prop) => {
  return <OpenStackLogo {...props} />;
};

export const Parker = (props: prop) => {
  return <ParkerLogo {...props} />;
};

export const TerraForm = (props: prop) => {
  return <TerraFormLogo {...props} />;
};
