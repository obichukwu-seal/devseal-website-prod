import { DataManagementSvg, RocketSvg, TerminalSvg } from "@/public/Service-Links";
import {Bot} from "lucide-react"
export interface ISubLinks {
  id: string;
  pathname: string;
  name: string;
  icon: any;
}
export interface INavLink {
  id: string;
  pathname: string;
  name: string;
  subLinks?: ISubLinks[];
}
export type INavLinks = INavLink[];

export const NAV_LINKS: INavLinks = [
  {
    id: "0",
    pathname: "/",
    name: "Home",
  },
  {
    id: "1",
    pathname: "/about-us",
    name: "About us",
  },
  {
    id: "2",
    pathname: "/services",
    name: "Services",
    subLinks: [
      {
        id: "0",
        pathname: "/services/artificial-intelligence-and-machine-learning",
        name: "Artificial intelligence/Machine Learning",
        icon: TerminalSvg,
      },
      {
        id: "1",
        pathname: "/services/Product-Development-Services",
        name: "Product Development Services",
        icon: RocketSvg,
      },
      {
        id: "2",
        pathname: "/services/data-management",
        name: "Data Management",
        icon: DataManagementSvg,
      },
    ],
  },
  {
    id: "3",
    pathname: "/industries",
    name: "Industries"
  },
  // {
  //   id: "4",
  //   pathname: "/press",
  //   name: "Press",
  // },
  {
    id: "5",
    pathname: "/contact-us",
    name: "Contact us",
  },
  {
    id: "6",
    pathname: "/products",
    name: "Products",
    subLinks: [
      {
        id: "0",
        pathname: "https://www.pensiondata.ai",
        name: "Pension AI",
        icon: Bot,
      },
      // {
      //   id: "1",
      //   pathname: "/services/Product-Development-Services",
      //   name: "Product Development Services",
      //   icon: RocketSvg,
      // },
      // {
      //   id: "2",
      //   pathname: "/services/data-management",
      //   name: "Data Management",
      //   icon: DataManagementSvg,
      // },
    ],
  },
];
