import { SVGProps } from "react";
import DataWareHouseSetLogo from "./dataWareHouseSet.svg";


type prop = SVGProps<SVGSVGElement>;

export const DataWareHouseSet = (props: prop) => {
  return <DataWareHouseSetLogo {...props} />;
};
