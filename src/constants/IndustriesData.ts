import {
  FinTechImage,
  FoodAndBeverageImage,
  HealthCareImage,
  HospitalityImage,
  IndustryImageHero,
  InsuranceImage,
  PropTechImage,
  TelecommunicationsImage,
} from "@/public/index";

export const INDUSTRIES_PAGE_CONTENT = {
  hero: {
    label: "BUSINESS SOLUTIONS FOR GLOBAL INDUSTRIES",
    title:
      "Empowering diverse industries with tailored solutions for every sector",
    content: "Transforming Industries with Innovative Technology",
    image: IndustryImageHero,
  },
  sectionOne: {
    title: "Empowering diverse industries with tailored solutions",
    content:
      "We provide customized technological solutions that address the unique challenges and goals of diverse industries, driving efficiency, innovation, and enhanced customer engagement",
    items: [
      {
        id: "0",
        title: "Healthcare",
        body: "Building innovative patient care health-tech  products with advanced, integrated healthcare technology",
        image: HealthCareImage,
      },
      {
        id: "1",
        title: "FinTech",
        body: "Revolutionizing financial services with secure, innovative digital solutions",
        image: FinTechImage,
      },
      {
        id: "2",
        title: "Proptech",
        body: "Transforming real estate with cutting-edge property technology solutions",
        image: PropTechImage,
      },
      {
        id: "3",
        title: "Insurance",
        body: "Modernizing insurance services with reliable, data-driven digital solutions",
        image: InsuranceImage,
      },
      {
        id: "04",
        title: "Food and Beverage",
        body: "Driving efficiency and innovation in the beverage and food industry through smart technology",
        image: FoodAndBeverageImage,
      },
      {
        id: "5",
        title: "Telecommunications",
        body: "Empowering connectivity with robust, scalable telecom solutions",
        image: TelecommunicationsImage,
      },
      {
        id: "6",
        title: "Hospitality",
        body: "Elevating guest experiences with innovative, hospitality-focused tech solutions",
        image: HospitalityImage,
      },
      {
        id: "0",
        title: "E-commerce",
        body: "Boosting online sales with seamless, customer-centric e-commerce platforms",
        image: FinTechImage,
      },
    ],
  },
};
