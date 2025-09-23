import Image, { ImageProps } from "next/image";
import { SVGProps } from "react";
import DevSealLogo from "./devsealLogo.svg";
import DevSealLogoWhite from './devseal-logo-white.svg'
import DevSealLogoNameExcluded from "./devseal-logo-full-opacity.svg";
import DevSealLogoNameExcludedColored from "./logowithoutNameColored.svg";
import DeavSealLogoWithoutTheName from "./devseal-logo.png";
import DevSealLogoOulinedWithoutTheName from "./devseal-logo-outline.png";
import DSFullOpacity from "./devseal-logo-full-opacity.png";
import SealAgentSmall from "./seal-small.svg";
import SealAgentLg from "./sealLarge.svg";
import MapImageLarge from "./mapImage.png";
import DevsealTeamImage from "./devsealTeam.png";
import CountryIllustraion from "./country-illustrate.png";
import TiedSvg from "./tied.png";
import VisionAfircaImage from "./vision-africa.png";
import AiHandImage from "./Ai-hand.jpg";
import SealsIconInvertedLogo from "./seals-icon-inverted.svg";
import MapIndustryLogo from "./mapIndustry.svg";
import industriesHeroImage from "./industries-hero-image.jpg";
import Mission from "./missionImage.svg";
import LinkedIn from "./LinkedIn.svg";
import HoveredLinkedIn from "./LinkedInSvgHovered.svg";
import Consult from "./new-images/consult.png"
import WhoWeAre from "./new-images/who-we-are.jpg"
import ContactWoman from "./new-images/call.png"

export type NewImageProp = Omit<ImageProps, "src" | "placeholder" | "alt">;
type prop = SVGProps<SVGSVGElement>;

export * from "./brands";
export * from "./social-icons";
export * from "./seal-engineers";
export * from "./ai-infastructure";
export * from "./cloud";
export * from "./cloud-2";
export * from "./cloud-data-storage";
export * from "./cloud-storage";
export * from "./data-service";
export * from "./data-visualization";
export * from "./data-warehouse";
export * from "./database";
export * from "./erp";
export * from "./erp-2";
export * from "./framework";
export * from "./mobile-app";
export * from "./new-product-logos";
export * from "./programming-languages";
export * from "./industries-icon";
export * from "./Home-page-images";
export * from "./solution-seekers-icon";
export * from "./empower-diverse-image";
export * from "./tied";
export * from "./Service-Links";
export * from "./Home-slide-image";
export * from "./AL";
export * from "./ai-ml-images"

export const SealLogo = (props: prop) => {
  return <DevSealLogo {...props} />;
};

export const SealLogoWhite = (props: prop) => {
  return <DevSealLogoWhite {...props} />;
};

export const MapIndustry = (props: prop) => {
  return <MapIndustryLogo {...props} />;
};

export const SealsInvertedIcon = (props: prop) => {
  return <SealsIconInvertedLogo {...props} />;
};

export const SealLogoNameExcluded = (props: prop) => {
  return <DevSealLogoNameExcluded {...props} />;
};

export const LinkedInSvg = (props: prop) => {
  return <LinkedIn {...props} />;
};

export const LinkedInSvgHovered = (props: prop) => {
  return <HoveredLinkedIn {...props} />;
};

export const SealLogoNameExcludedColored = (props: prop) => {
  return <DevSealLogoNameExcludedColored {...props} />;
};

export const SealAgent = (props: prop) => {
  return <SealAgentSmall {...props} />;
};
export const SealAgentLarge = (props: prop) => {
  return <SealAgentLg {...props} />;
};
export const Tied = (props: NewImageProp) => {
  return <Image src={TiedSvg} alt="Tied" placeholder={"empty"} {...props} />;
};
export const ConsultImage = (props: NewImageProp) => {
  return <Image src={Consult} alt="Consult" placeholder={"empty"} {...props} />;
};

export const WhoWeAreImage = (props: NewImageProp) => {
  return <Image src={WhoWeAre} alt="Who we are" placeholder={"empty"} {...props} />;
};
export const ContactWomanImage = (props: NewImageProp) => {
  return <Image src={ContactWoman} alt="Contact us" placeholder={"empty"} {...props} />;
};

export const MissionImage = (props: prop) => {
  return <Mission {...props} />;
};

export const VisionAfrica = (props: NewImageProp) => {
  return (
    <Image
      src={VisionAfircaImage}
      alt="Africa focused map"
      placeholder={"empty"}
      {...props}
    />
  );
};
export const DevSealLogoReducedOpacity = (props: NewImageProp) => {
  return (
    <Image
      src={DeavSealLogoWithoutTheName}
      alt="DevSeal Logo"
      placeholder={"blur"}
      {...props}
    />
  );
};
export const DevSealLogoOutlinedReducedOpacity = (props: NewImageProp) => (
  <Image
    src={DevSealLogoOulinedWithoutTheName}
    alt="devSEAL Logo"
    placeholder="blur"
    {...props}
  />
);

export const DevSealLogoFullOpacity = (props: NewImageProp) => (
  <Image src={DSFullOpacity} alt="devSEAL Logo" placeholder="blur" {...props} />
);

export const MapImage = (props: NewImageProp) => (
  <Image src={MapImageLarge} alt="map" placeholder="blur" {...props} />
);

export const SealImage = (props: NewImageProp) => (
  <Image src={DevsealTeamImage} alt="seals" placeholder="blur" {...props} />
);

export const CountryIllustraionImage = (props: NewImageProp) => (
  <Image
    src={CountryIllustraion}
    alt="countries"
    placeholder="blur"
    {...props}
  />
);

export const AiHand = (props: NewImageProp) => (
  <Image src={AiHandImage} alt="AI" placeholder="blur" {...props} />
);

export const IndustryImageHero = (props: NewImageProp) => (
  <Image
    src={industriesHeroImage}
    alt="industry"
    placeholder="blur"
    {...props}
  />
);
