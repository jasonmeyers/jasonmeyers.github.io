import React from "react";
import Image from "next/image";
import jasonImage from "../../public/jason-meyers.png";
import styles from "../app/page.module.css";
import Link from "next/link";

function Introduction() {
  return (
    <div className={styles.description}>
      <Image src={jasonImage} alt="Jason Meyers" width={600} priority />
      <h1 className={styles.h1}>I am Jason Meyers</h1>
      <p>
        I work as a <strong>Design </strong> + <strong>UI Engineer</strong>{" "}
        &mdash; I build cloud-native SaaS products, design systems, and
        high-touch information interfaces &mdash; from Finance to Education,
        Insurance to Publishing.
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/jason-meyers-ui/"
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
        {/* <Link href="/work">Work ⇢</Link> */}
      </p>
    </div>
  );
}

export default Introduction;
