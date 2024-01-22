import React from "react";
import styles from "../work.module.css";

const experience = [
  {
    company: "Religion Studio",
    description: "Marketing site for boutique NYC design firm",
    role: "Web Developer",
    year: "2023",
    url: "https://www.religion.studio/",
    keywords: ["marketing", "UX", "React JS", "product management"],
  },
  {
    company: "SS&C/Advent",
    product: "Advent Genesis",
    role: "UI Engineer",
    description:
      "Built a comprehensive design system for a rollout to a 20+ cloud-native application portfolio, in Lit+Web Components to support React/Angular/Lit",
    year: "2022-2023",
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
    company: "Anzen Professional Insurance",
    role: "Web Developer + Producer",
    description: [
      "Developed a design system, dashboard, onboarding checklist, customer acquisition flows, and marketing site in NextJS/React/Redux/Emotion, both as a developer and as a producer.",
    ],
    year: "2022",
    url: "https://www.anzen.com/",
    keywords: ["marketing", "ecommerce", "design system"],
  },
  {
    company: "Apple",
    product: "Apple TV+",
    description:
      "Built responsive website for AppleTV+, in 34 languages, for Apple (via Rosewood Creative)",
    year: "2022",
    url: "https://www.religion.studio/",
    keywords: ["marketing", "ecommerce"],
  },
  {
    company: "HiRoad + State Farm",
    product: "HiRoad Insurance platform",
    description:
      "Built responsive website for AppleTV+, in 34 languages, for Apple (via Rosewood Creative)",
    year: "2022",
    url: "https://www.religion.studio/",
    keywords: ["marketing", "ecommerce"],
  },
];

const work = (props) => {
  return (
    <>
      {experience.map(({ company, work, product, description } = item) => (
        <section key={company} className={styles.work}>
          <h1 className={styles.header1}>{company}</h1>
          <blockquote className={styles.blockquote}>
            {product} {description}
          </blockquote>
        </section>
      ))}
    </>
  );
};

export default work;
