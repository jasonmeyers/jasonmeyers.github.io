import styles from "./page.module.css";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <main className={styles.main}>
      <Introduction />
    </main>
  );
}
