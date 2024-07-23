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
      { region: "DevSeal Technologies Africa", address: "Plot 9 Gbagada - Oworonshoki Expy, beside UPS, Araromi 105102, Lagos, Nigeria",
         pathName: "https://www.google.com/maps/place/Regus+-+Lagos,+The+Zone/@6.5516825,3.3768495,17z/data=!4m6!3m5!1s0x103b8dbf2138a777:0xa325393dceb4c180!8m2!3d6.5516825!4d3.3768495!16s%2Fg%2F11jt682jlm?entry=ttu" },
      { region: "DevSeal Technologies North America", address: "1452 Hughes Road, Suite 200, Grapevine, TX 76051, USA", pathName:"https://www.google.com/maps/place/1452+Hughes+Rd+%23200,+Grapevine,+TX+76051,+USA/@32.8893829,-97.0969922,17z/data=!3m1!4b1!4m6!3m5!1s0x864dd54d612c3fa1:0x6ea5a2a27f758cb!8m2!3d32.8893829!4d-97.0944173!16s%2Fg%2F11lk_pkzv0?entry=ttu" },
    ],
    services: {
      title: "Our Services",
      list: [
        {name: "Artificial Intelligence/ Machine Learning", pathName:"/services/artificial-intelligence-and-machine-learning"},
        {name: "Product Development", pathName:"/services/Product-Development-Services"},
        {name: "Data Management", pathName:"/services/data-management"},

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
      phone: "+234 201 330 0447",

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
