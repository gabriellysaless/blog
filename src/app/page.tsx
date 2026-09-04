import Title from "@/components/Title";
import styles from "./page.module.css";
import Grid from "@/components/Grid";

import { getAllArticles } from "@/lib/tratamento-artigos";

export default async function Home() {

  const artigos = await getAllArticles();

  return (
    <div className={styles.page}>
      <Title title="Principais Notícias"></Title>
      <Grid artigos={artigos}></Grid>
    </div>
  );
};
