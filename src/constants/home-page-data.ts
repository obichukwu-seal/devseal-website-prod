import { HomepageHeroImage } from "@/public/Home-page-images";
import * as newProductImage from "@/public/new-product-logos";
import * as erpImages from "@/public/erp";
import * as cloudImages from "@/public/cloud";
import {
  AbdulImage,
  AfolabImage,
  AyomideImage,
  AzubikeImage,
  HenryImage,
  ObichukwuImage,
  SamsonImage,
  TaiwoImage,
} from "@/public/seal-engineers";
import {
  BusinessIcon,
  RocketIcon,
  StoreFrontIcon,
} from "@/public/solution-seekers-icon";

export const HOME_PAGE_CONTENTS = {
  hero: {
    title: "Your Premier Software Development Team!",
    subtitle:
      "From Startups to Industry Leaders, We are Your Technological Partner",
    image: HomepageHeroImage,
  },
  sectionOne: {
    title: "What We Excel At",
    sectionItems: [
      {
        id: "0",
        title: "New Products",
        Content: [
          "New product development & testing (Web, Windows, Android, iOS)",
          "Major enhancement & replacement implementation (e.g. Intellisync, Snapshot Mobile)",
        ],
        images: Object.values(newProductImage),
      },
      {
        id: "2",
        title: "Cloud, Data Analytics, AI/ML",
        Content: [
          "Migrate Application to Micro-service",
          "Architecture and deploy in OEC platform",
          "Continuous Integration (CI)",
          "Continuous Delivery (CD)",
          "Continuous Testing (CT)",
          "Metric, Monitoring & Logging (e.g: Snapshot (IT); OEC, iEnergy (Landmark)",
        ],
        images: Object.values(cloudImages),
      },
      {
        id: "1",
        title: "ERP (SAP, Oracle, Dynamic 365)",
        Content: [
          "All level support (L1, L2, L3)",
          "Bug fixing & change request implementation",
        ],
        images: Object.values(erpImages),
      },
    ],
    CTA: {
      title: "How may our SEALs be of help to you?",
      button: {
        text: "Talk to the SEALs",
        link: "*",
      },
    },
  },
  sectionTwo: {
    title: "Our Solution Seekers",
    list: [
      {
        id: "0",
        icon: RocketIcon,
        title: "Startups",
        content:
          "From concept to launch, we fuel startups with tailored digital solutions, ensuring their journey to success is seamless and impactful. We are your dedicated partner in innovation",
      },
      {
        id: "1",
        icon: StoreFrontIcon,
        title: "Growing businesses",
        content:
          "We offer  scalable digital solutions crafted to propel business expansion and sustain momentum. From scaling operations to enhancing customer engagement, fueling your growth every step of the way",
      },
      {
        id: "2",
        icon: BusinessIcon,
        title: "Big businesses",
        content:
          "We delivers robust digital solutions engineered to match your scale and ambition, amplifying efficiency and maintaining competitive edge. Trust our expertise to optimize your operations and streamline processes",
      },
    ],
  },
  sectionThree: {
    sectionOne: {
      title: "Who we are",
      body: "We started devSEAL Technologies because we believed that the best and brightest product engineers can come from anywhere in the world, including Africa",
      vision: {
        title: "Our Vision",
        content:
          "To shift the centre of gravity of Information technology closer to Africa",
        image: "",
      },
      mission: {
        title: "Our Mission",
        content:
          "Delivering information technology excellence with military precision",
        image: "",
      },
    },
    sectionTwo: {
      title: "the SEALs",
      list: [
        {
          id: "0",
          name: "Taiwo Omosebi",
          position: "BRAVO Engr. - FullStack",
          aboutTheDeveloper: "",
          image: TaiwoImage,
        },
        {
          id: "1",
          name: "Obichukwu Onye",
          position: "BRAVO Engr. - FullStack",
          aboutTheDeveloper: "",
          image: ObichukwuImage,
        },
        {
          id: "2",
          name: "Ishola Samson",
          position: "BRAVO Engr. - FrontEnd",
          aboutTheDeveloper: "",
          image: SamsonImage,
        },
        {
          id: "3",
          name: "Akintunde Afolabi",
          position: "CHARLIE Engr. - FrontEnd",
          aboutTheDeveloper: "",
          image: AfolabImage,
        },
        {
          id: "4",
          name: "Henry Otunuya ",
          position: "CHARLIE Engr. - BackEnd",
          aboutTheDeveloper: "",
          image: HenryImage,
        },
        {
          id: "5",
          name: "Abdullahi S.",
          position: "CHARLIE Engr. - BackEnd",
          aboutTheDeveloper: "",
          image: AbdulImage,
        },
        {
          id: "6",
          name: "Ayorinde Smart",
          position: "CHARLIE Engr. - BackEnd",
          aboutTheDeveloper: "",
          image: AyomideImage,
        },
        {
          id: "7",
          name: "Azubuike Obi",
          position: "CHARLIE Engr. - BackEnd",
          aboutTheDeveloper: "",
          image: AzubikeImage,
        },
      ],
      callToAction: {
        title: "Do you have what it takes to be a part of us?",
        button: {
          text: "Become a SEAL",
          link: "*",
        },
      },
    },
  },
};
