import { SealLogoWhite } from "@/public/index";
import { title } from "process";

export const FOOTER_DATA = {
  header: {
    Image: SealLogoWhite,
    CTA: {
      text: "Become a SEAL",
      link: "/bookings",
    },
  },
  main: {
    address: [
      { region: "DevSeal Technologies Africa", address: "Plot 9 Gbagada - Oworonshoki Expy,beside UPS, Araromi 105102, Lagos, Nigeria" },
      { region: "DevSeal Technologies North America", address: "1452 Hughes Road, Suite 200, Grapevine, TX 76051, USA" },
    ],
    services: {
      title: "Our Services",
      list: [
        "Artificial Intelligence",
        "Machine Learning",
        "Product Development",
        "Data Engineering/  Business Intelligence/  Advanced Analytics",

      ],
    },
    privacySecurity: {
      title: "Privacy & Security",
      list: [
        "Privacy Policy",
        "Terms and Conditions",
        "Copyright Notice"
      ]
    },
    contacts: {
      title: "Contact Us",
      email: "hello@devseal.tech",
      phone: "+234 818 000 0000",

    },
    CTA: {
      text: "Become a seal",
      link: "/bookings",
    },
  },
  footer: {
    rights: "© 2024 devSEAL. All Rights Reserved",
    links: [
      {
        text: "Privacy Policy",
        link: "/#",
      },
      {
        text: "Media Kit",
        link: "/#",
      },
    ],
  },
};
