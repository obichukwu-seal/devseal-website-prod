import Image, { ImageProps } from 'next/image';
import NigeriaLogo from "./NG.png"
import USAlogo from "./USA.png"

type NewImageProp = Omit<ImageProps, "src" | "placeholder" | "alt">;

export const Nigeria = (props: NewImageProp) => {
    return <Image src={NigeriaLogo} alt="Nigeria" {...props} />;
}

export const USA = (props: NewImageProp) => {
    return <Image src={USAlogo} alt="USA" {...props} />;
}