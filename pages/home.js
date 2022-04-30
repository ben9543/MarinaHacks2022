import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Grid, Input, Link, Text, Spacer } from "@nextui-org/react";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Homepage</h1>
        <Spacer y={2.5} />
        <Input
          clearable
          label="Search"
          placeholder="Name or class"
          size="xl"
          width="600px"
        />
        <Spacer y={2.5} />
        <Grid>
          <Button size="xl" shadow color="gradient" auto>
            Browse StudyBuddies
          </Button>
        </Grid>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/ben9543/MarinaHacks2022"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Ben Kweon, Janelle Chan, and Jordan Hilado
          <span className={styles.logo}>
            <Image src="/github.svg" alt="Vercel Logo" width={20} height={20} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home;
