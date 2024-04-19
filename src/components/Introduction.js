import React from "react";
import Image from "next/image";
import jasonImage from "../../public/jason-meyers-small.jpg";
import styles from "../styles/intro.module.css";
import { fullName } from "@/app/utilities";

function Introduction() {
  return (
    <main className={styles.main}>
      <div className={styles.photo}>
        <Image src={jasonImage} alt="Jason Meyers" height={400} priority />
      </div>
      <div className={styles.description}>
        <h1 className={styles.h1}>Hello! I am {fullName}</h1>
        <p>
          I work as a <strong>Design </strong> + <strong>UI Engineer</strong>{" "}
          &mdash; I build cloud-native SaaS products, design systems, and
          high-touch information interfaces &mdash; from finance to insurance,
          education to publishing.
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/jason-meyers-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin ⇢
          </a>{" "}
          <a
            href="https://github.com/jasonmeyers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github ⇢
          </a>
          {/* <a href="/work">Work ⇢</a> */}
        </p>
      </div>
    </main>
  );
}

export default Introduction;
