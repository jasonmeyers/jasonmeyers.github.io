import React from "react";
import Image from "next/image";
import jasonImage from "../../public/jason-meyers.png";
import styles from "../app/page.module.css";

function Introduction() {
  return (
    <div className="description">
      <Image src={jasonImage} alt="Jason Meyers" width={400} />
      <h1 className={styles.h1}>I am Jason Meyers</h1>I work as a{" "}
      <strong>Web Developer</strong> and <strong>UI Engineer</strong>.
      <p>
        I build UI + help organizations explore, define, and create products
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/jason-meyers-ui/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>{" "}
        <a
          href="https://github.com/jasonmeyers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
    </div>
  );
}

export default Introduction;
