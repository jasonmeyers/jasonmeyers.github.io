import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="description">
        <h1>I am Jason Meyers</h1>I work as a <strong>Web Developer</strong> and{" "}
        <strong>UI Engineer</strong>.
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
    </main>
  );
}
