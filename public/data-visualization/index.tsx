import { SVGProps } from "react";
import DataVisualizationSetLogo from "./dataVisualizationSet.svg";


type prop = SVGProps<SVGSVGElement>;

export const DataVisualization = (props: prop) => {
  return <DataVisualizationSetLogo {...props} />;
};

