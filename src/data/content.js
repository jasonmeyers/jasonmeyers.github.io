import religionLogo from "../../public/work/religion-logo.svg";
import religionImage from "../../public/work/religion-studio-1.png";
import religionContact from "../../public/work/religion-contact.png";

import ssncLogo from "../../public/work/ssnc-logo.png";
import appleLogo from "../../public/work/apple-logo.png";
import anzenLogo from "../../public/work/anzen-logo.png";
import stateFarmLogo from "../../public/work/state-farm-logo.png";
import hiRoadLogo from "../../public/work/hiroad-logo.svg";
import ellucianLogo from "../../public/work/ellucian-logo.svg";
import businessWireLogo from "../../public/work/business-wire-logo.png";

export const fullName = "Jason Meyers";

export const experience = [
  {
    company: "SS&C/Advent",
    logo: ssncLogo,
    year: "2022-2023",
    role: "UI Engineer",
    products: ["Advent Genesis", "Advent Design System"],
    description:
      "I built a comprehensive design system, for a rollout to a portfolio of 20+ standalone applications, in Lit+Web Components to support React/Angular/Lit",

    url: "https://www.advent.com/solutions/advent-genesis/",
    keywords: [
      "Advent Genesis Portfolio Management Tool",
      "design system",
      "engineering",
      "react",
      "web components",
    ],
  },
  {
    company: "Religion Studio",
    logo: religionLogo,
    role: "React Developer",
    products: ["Studio Website"],
    description:
      "I was approached by Religion to create a boutique interactive experience, which highlights their cutting-edge approach to design. ",
    year: "2022-2023",
    url: "https://www.religion.studio/",
    keywords: ["marketing", "UX", "React JS", "product management"],
    work: [
      {
        name: "first",
        image: religionImage,
      },
      {
        name: "second",
        image: religionContact,
      },
    ],
  },
  {
    company: "Anzen Professional Insurance",
    logo: anzenLogo,
    year: "2021-2022",
    products: [],
    role: "Web Developer + Producer",
    description: [
      "Developed a design system, dashboard, onboarding checklist, customer acquisition flows, and marketing site in NextJS/React/Redux/Emotion, both as a developer and as a producer.",
    ],
    url: "https://www.anzen.com/",
    keywords: ["marketing", "e-commerce", "design system"],
  },
  {
    company: "Apple + Rosewood Creative",
    logo: appleLogo,
    products: ["Apple TV+", "Apple One"],
    description: `Built responsive website for AppleTV+, in 34 languages.
      Built and tested a responsive templating engine for Apple One.
       (partner: Rosewood Creative)`,
    year: "2021",
    url: "https://tv.apple.com/",
    keywords: ["marketing", "e-commerce"],
  },
  {
    company: "HiRoad + State Farm",
    logo: stateFarmLogo,
    products: [
      "HiRoad insurance platform",
      "HiRoad Brand Portal",
      "Quote and Onboarding flows",
      "Customer Care Portal",
      "Landing Pages",
    ],
    description:
      "Built responsive website for AppleTV+, in 34 languages, for Apple (via Rosewood Creative)",
    year: "2016-2020",
    url: "https://www.hiroad.com/",
    keywords: ["marketing", "e-commerce"],
  },
  {
    company: "Ellucian",
    logo: ellucianLogo,
    products: ["Brainstorm LMS"],
    description: "Built product features with PM, CSS",
    year: "2015",
    url: "https://www.ellucian.com/",
    keywords: ["education", "LMS"],
  },
  {
    company: "Business Wire",
    logo: businessWireLogo,
    products: [
      "Press Release product",
      "Onboarding tools and flow",
      "Press Release Authoring tooling and UI",
    ],
    description:
      "Built and optimized templates/views used by 2.4M documents @ 3.1M views/month. Built and optimized responsive templates on top of Business Wire’s J2EE order-entry stack. Led product feature ideation and prototyping for order-entry flows. Set site and institutional standards for markup, design and CSS.",
    year: "2013-2015",
    url: "https://www.businesswire.com/",
    keywords: ["marketing", "publishing"],
  },
];
