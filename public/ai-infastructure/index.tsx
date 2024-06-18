import { SVGProps } from "react";
import ChainerLogo from './chainer.svg'
import DeepSeedLogo from './deepspeed.svg'
import PyTouchLogo from './pytouch.svg'
import SuperAgiLogo from './superAGI.svg'
type prop = SVGProps<SVGSVGElement>;


export const Chainer = (props: prop) => {
  return <ChainerLogo {...props} />;
};
export const DeepSeed = (props: prop) => {
  return <DeepSeedLogo {...props} />;
};
export const Pytouch = (props: prop) => {
  return <PyTouchLogo {...props} />;
};

export const SuperAgi = (props: prop) => {
  return <SuperAgiLogo {...props} />;
};