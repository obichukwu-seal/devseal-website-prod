import {
  image1,
  image2,
  image3,
  image4,
  image5,
  ProductServiceHero,
} from "@/public/product-service";

export const PRODUCT_DEVELOPMENT_SERVICE = {
  hero: {
    title: "Comprehensive 'Product Development' Services",
    subtitle:
      "Turn your ideas into successful products with our dedicated development teams.",
    image: { ProductServiceHero },
    cta: {
      text: "Get Started",
      pathname: "/bookings",
    },
  },
  sectionFour: {
    title: "Product Development Services",
    sectionItems: [
      {
        id: "0",
        title: "Dedicated Development Team Services",
        content:
          "Hire Dedicated Developers in Weeks, Not Months. Get access to a pool of 600+ in-house developers, project managers, and business analysts. Save on development costs and reduce your time-to-market.",
        Image: image1,
      },
      {
        id: "1",
        title: "Web Development Services",
        content:
          "Full-cycle web development services from requirements’ gathering and architecture design to the product’s delivery and support",
        Image: image2,
      },

      {
        id: "2",
        title: "Java Development Services",
        content:
          "Expert Java Software Development with high-end technology and efficient architecture patterns.",
        Image: image3,
      },
      {
        id: "3",
        title: "Custom Software Development Services",
        content:
          "A winning fusion of Research & Business Analysis, Software Development, Quality Assurance, and Post-Release Support.",
        Image: image4,
      },
      {
        id: "4",
        title: "Mobile App Development Services",
        content:
          "Custom mobile application development services for the iOS and Android platforms using a wide range of technologies.",
        Image: image5,
      },
    ],
  },
};
