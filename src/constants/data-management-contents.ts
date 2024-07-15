import { BusinessRequirement, DataArchitecture, DataDomain, DataGovernance, DataMangementHeroImage, DataMesh, DataSecurity, DataStrategy, MetaData } from "@/public/data-management-images";

export const DATA_MANAGEMENT_CONTENTS = {
  hero: {
    title: "Data Management",
    subtitle: "Harness the power of our data management expertise to organize, secure, and optimize your business data. Transform raw data into valuable insights, enhance operational efficiency, and drive informed decision-making.",
    image: { DataMangementHeroImage },
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
        Image: DataStrategy,
      },
      {
        id: "1",
        title: "Business Requirements Workshops",
        content:
          "Interactive sessions to identify and document your precise data needs.",
        Image: BusinessRequirement,
      },

      {
        id: "2",
        title: "Data Governance and Quality ",
        content:
          "Ensuring data integrity, consistency, and compliance across your organization",
        Image: DataGovernance,
      },
      {
        id: "3",
        title: "Data Security, Sovereignty & Privacy",
        content:
          "Comprehensive solutions to protect your data and comply with regulatory requirements.",
        Image: DataSecurity,
      },
      {
        id: "4",
        title: "Metadata Management",
        content:
          "Efficient organization and utilization of data assets through effective metadata practices.",
        Image: MetaData,
      },
      {
        id: "5",
        title: "Data Domain & Data Product Delivery",
        content:
          "Specialized delivery of tailored data solutions and products.",
        Image: DataDomain,
      },
      {
        id: "6",
        title: "Data Architecture & Modelling",
        content:
          "Designing scalable and efficient data architectures and models.",
        Image: DataArchitecture,
      },
      {
        id: "7",
        title: "Data Mesh, Data Lake, Enterprise Data Warehouse",
        content:
          "We specialize in implementing advanced data storage and management frameworks for optimal performance.",
        Image: DataMesh,
      },
    ],
  },
}
