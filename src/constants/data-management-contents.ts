import {
    AimlHeroImage,
    Image1,
    Image2,
    image3,
    image4,
    image5,
    image6,
  } from "@/public/ai-ml-images";
  
export const DATA_MANAGEMENT_CONTENTS = {
    hero: {
      title: "Data Management",
      subtitle:"Harness the power of our data management expertise to organize, secure, and optimize your business data. Transform raw data into valuable insights, enhance operational efficiency, and drive informed decision-making.",
      image: { AimlHeroImage },
      cta: {
        text: "Get Started",
        pathname: "/bookings",
      },
    },
    sectionFour: {
      title: "Data Management Services",
      sectionItems: [
        {
          id: "0",
          title: "Data Strategy Advisory & Consultation",
          content:
            "We provide expert guidance to develop a robust data strategy aligned with your business objectives",
          Image: Image1,
        },
        {
          id: "1",
          title: "Business Requirements Workshops",
          content:
            "Interactive sessions to identify and document your precise data needs.",
          Image: Image2,
        },
  
        {
          id: "2",
          title: "Data Governance and Quality ",
          content:
            "Ensuring data integrity, consistency, and compliance across your organization",
          Image: image3,
        },
        {
          id: "3",
          title: "Data Security, Sovereignty & Privacy",
          content:
            "Comprehensive solutions to protect your data and comply with regulatory requirements.",
          Image: image4,
        },
        {
          id: "4",
          title: "Metadata Management",
          content:
            "Efficient organization and utilization of data assets through effective metadata practices.",
          Image: image5,
        },
        {
          id: "5",
          title: "Data Domain & Data Product Delivery",
          content:
            "Specialized delivery of tailored data solutions and products.",
          Image: image6,
        },
        {
          id: "6",
          title: "Data Architecture & Modelling",
          content:
            "Designing scalable and efficient data architectures and models.",
          Image: image6,
        },
        {
          id: "7",
          title: "Data Mesh, Data Lake, Enterprise Data Warehouse",
          content:
            "We specialize in implementing advanced data storage and management frameworks for optimal performance.",
          Image: image6,
        },
      ],
    },
  }