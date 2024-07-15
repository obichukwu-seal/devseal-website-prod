import { HomepageHeroImage } from "@/public/Home-page-images";
import * as newProductImage from "@/public/new-product-logos";
import * as erpImages from "@/public/erp";
import * as cloudImages from "@/public/cloud";
import * as HeroSlideImages from "@/public/Home-slide-image";

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
import { BulbSvgIcon, ColorWandSvgIcon, ExtensionPuzzleSvgIcon, EyeSvgIcon, ServerSvgIcon, SpeedoMeterSvgIcon } from "@/public/AL";

export const HOME_PAGE_CONTENTS = {
  hero: {
    title: "Your Premier Software Development Team!",
    titles: [
      "Artificial Intelligence and Machine Learning",
      "Software Product Development",
      "Your Premier Software Development Team!"
    ],
    subtitle:
      "From Startups to Industry Leaders, We are Your Technological Partner",
    image: HeroSlideImages,
    cta: [
      {
        text:"learn more",
        pathname:"/services/artificial-intelligence-and-machine-learning"
      },
      {
        text:"learn more",
        pathname:"services/Product-Development-Services"
      },
      {
        text:"learn more",
        pathname:"/about-us"
      }
    ]
  },
  sectionFour:{
    title: "AI/ML Development Services",
    sectionItems: [
      {
        id: "0",
        title: "Generative AI Development",
        content: "Drive your business with our AI/ML development expertise. Automate routine tasks, streamline complex operations, and improve decision-making using artificial intelligence and machine learning.",
        Icon: ColorWandSvgIcon,
      },
      {
        id: "1",
        title: "Computer Vision Development",
        content: "Our custom computer vision solutions equip business systems with capabilities for object detection and tracking, image and video analysis, face and character recognition.",
        Icon: EyeSvgIcon,
      },
 
      {
        id: "2",
        title: "Intelligent Automation",
        content: "Let us bring the power of Artificial intelligence to enable smarter and more efficient business processes for your organization.",
        Icon: SpeedoMeterSvgIcon,
      },
      {
        id: "3",
        title: "AI Consulting",
        content: "Benefit from our artificial intelligence consulting services to launch your AI project and bring your innovative business ideas to life.",
        Icon: BulbSvgIcon,
      },
      {
        id: "4",
        title: "MLOps Services",
        content: "Develop, deploy, scale, and maintain ML projects with unprecedented speed and efficiency. Ensure smooth and round-the-clock ML model operations with our MLOps services.",
        Icon: ServerSvgIcon,
      },
      {
        id: "0",
        title: "Custom AI Solutions",
        content: "Find better business models, new revenue streams with Machine Learning and Custom Artificial Intelligence Solutions like Virtual Assistants, Data-Driven Insights and Predictive Analytics.",
        Icon: ExtensionPuzzleSvgIcon,
      },
    ],
    
  },
  sectionOne: {
    title: "Software Product Development",
    sectionItems: [
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
        id: "0",
        title: "New Products",
        Content: [
          "New product development & testing (Web, Windows, Android, iOS)",
          "Major enhancement & replacement implementation (e.g. Intellisync, Snapshot Mobile)",
        ],
        images: Object.values(newProductImage),
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
        link: "/bookings",
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
          linkedIn:""
        },
        {
          id: "1",
          name: "Obichukwu Onye",
          position: "BRAVO Engr. - FullStack",
          aboutTheDeveloper: "",
          image: ObichukwuImage,
          linkedIn:""
        },
        {
          id: "2",
          name: "Ishola Samson",
          position: "BRAVO Engr. - FrontEnd",
          aboutTheDeveloper: "",
          image: SamsonImage,
          linkedIn:""
        },
        {
          id: "3",
          name: "Akintunde Afolabi",
          position: "CHARLIE Engr. - FrontEnd",
          aboutTheDeveloper: "",
          image: AfolabImage,
          linkedIn:""
        },
        {
          id: "4",
          name: "Henry Otunuya ",
          position: "CHARLIE Engr. - BackEnd",
          aboutTheDeveloper: "",
          image: HenryImage,
          linkedIn:""
        },
        {
          id: "5",
          name: "Abdullahi S.",
          position: "CHARLIE Engr. - BackEnd",
          aboutTheDeveloper: "",
          image: AbdulImage,
          linkedIn:""

        },
        {
          id: "6",
          name: "Ayorinde Smart",
          position: "CHARLIE Engr. - BackEnd",
          aboutTheDeveloper: "",
          image: AyomideImage,
          linkedIn:""
        },
        {
          id: "7",
          name: "Azubuike Obi",
          position: "CHARLIE Engr. - BackEnd",
          aboutTheDeveloper: "",
          image: AzubikeImage,
          linkedIn:""
        },
      ],
      callToAction: {
        title: "Do you have what it takes to be a part of us?",
        button: {
          text: "Become a SEAL",
          link: "/bookings",
        },
      },
    },
  },
};
