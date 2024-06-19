import { AiHand } from "@/public/index";
import * as newProductImage from "@/public/new-product-logos";
import * as erpImages from "@/public/erp";
import * as cloudImages from "@/public/cloud";
import * as programmingLanguageImages from "@/public/programming-languages";
import * as cloudImagesTwo from "@/public/cloud-2";
import * as mobileAppImages from "@/public/mobile-app";
import * as databaseImages from "@/public/database";
import * as frameworkImages from "@/public/framework";
import * as erpImagesTwo from "@/public/erp-2";

export const SERVICE_PAGE_CONTENTS = {
  hero: {
    title: "Artificial Intelligence as a Business Solution",
    subtitle: "Transforming Business Landscape with AI Solutions",
    image: AiHand,
  },
  sectionOne: {
    title: "Explore Our Expertise in Innovation and Technology",
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
        link: "/bookings",
      },
    },
  },
  sectionTwo: {
    subSectionOne: {
      title: "We have a wide range of services",
      list: [
        {
          id: 0,
          title: "Programming languages",
          content:
            "PHP, Java, .NET, ReactJS, Python, Angular J, HTML, CSS, Node.js, Ruby on Rails,C/C++, Golang, Cobol.",
          image: Object.values(programmingLanguageImages),
        },
        {
          id: 1,
          title: "Cloud",
          content:
            "AWS, Azure, Google Cloud, Digital Ocean, Oracle Cloud, IBM Cloud",
          image: Object.values(cloudImagesTwo),
        },
        {
          id: 2,
          title: "Database",
          content: "Oracle Database, MySQL, SQL Server, DataBricks",
          image: Object.values(databaseImages),
        },
        {
          id: 3,
          title: "Frameworks & Tools",
          content:
            "Spring, Spring boot, Bootstrap, Hibernate TE, Logback/log4j2, ASP.NET, Lavarel",
          image: Object.values(frameworkImages),
        },
        {
          id: 4,
          title: "Mobile App",
          content:
            "Android, iOS, Java, Swift, Objective-C, Flutter, React Native, Kotlin, Dart",
          image: Object.values(mobileAppImages),
        },
        {
          id: 5,
          title: "ERP",
          content: "Salesforce, SAP, Odoo, Oracle, Dynamics 365",
          image: Object.values(erpImagesTwo),
        },
      ],
    },
    subSectionTwo: {
      title:
        "Data Engineering & Advanced Analytics / Business Intelligence Capabilities",
      list: [
        {
          id: 0,
          title: "Advisory & Consulting",
          items: [
            "Analytics vision & Use cases assessment",
            "Evaluate new approaches & define future analytics architecture",
            "Analytics roadmap, organization, budget",
          ],
        },
        {
          id: 1,
          title: "Data Operation",
          items: [
            "Environment design/implementation & monitoring",
            "Semantic rule & metadata definition (ontology)",
            "Data pipeline development & operation",
          ],
        },
        {
          id: 2,
          title: "Data Analytics & AI",
          items: [
            "Time series forecasting",
            "Recommendation system",
            "Natural language processing",
          ],
        },
        {
          id: 3,
          title: "Data Integration",
          items: ["Bespoke Analytics", "Applications development"],
        },
        {
          id: 4,
          title: "AI Infrastructure",
          items: [
            "Analytics vision & Use cases assessment",
            "Evaluate new approaches & define future analytics architecture",
            "Analytics roadmap, organization, budget",
          ],
        },
        {
          id: 5,
          title: "Data Services",
          items: [
            "Analytics vision & Use cases assessment",
            "Evaluate new approaches & define future analytics architecture",
            "Analytics roadmap, organization, budget",
          ],
        },
        {
          id: 6,
          title: "Cloud Data Storage",
          items: [
            "Analytics vision & Use cases assessment",
            "Evaluate new approaches & define future analytics architecture",
            "Analytics roadmap, organization, budget",
          ],
        },
        {
          id: 7,
          title: "Data Warehouse Technologies",
          items: [
            "Analytics vision & Use cases assessment",
            "Evaluate new approaches & define future analytics architecture",
            "Analytics roadmap, organization, budget",
          ],
        },
        {
          id: 8,
          title: "Cloud Data Storage",
          items: [
            "Analytics vision & Use cases assessment",
            "Evaluate new approaches & define future analytics architecture",
            "Analytics roadmap, organization, budget",
          ],
        },
      ],
    },
  },
};
