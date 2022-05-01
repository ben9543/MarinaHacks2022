import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Grid, Link, Text, Spacer, Collapse } from "@nextui-org/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StudyBuddy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Text
          h1
          size={70}
          css={{
            textGradient: "45deg, $blue500 -20%, $pink500 50%",
          }}
          weight="bold"
        >
          Welcome to StudyBuddy!
        </Text>

        <p className={styles.description}>Your favorite study group finder.</p>

        <div className={styles.grid}>
          <Grid>
            <Link href="/signup">
              <Button size="xl" color="gradient" auto>
                Sign up
              </Button>
            </Link>
          </Grid>
          <Spacer y={2} />
          <Grid>
            <Link href="/signin">
              <Button size="xl" color="gradient" auto ghost>
                Sign in
              </Button>
            </Link>
          </Grid>
        </div>
        <Spacer y={10} />
        <Text
          h1
          size={40}
          css={{
            textGradient: "45deg, $blue500 -20%, $pink500 50%",
          }}
          weight="bold"
        >
          FAQ
        </Text>
        <Collapse.Group width="300">
          <Collapse title="What is StudyBuddy?">
            <Text>
              StudyBuddy is a platform that will allow you to connect with a
              classmate that would like to study together.
            </Text>
          </Collapse>
          <Collapse title="How does it work?">
            <Text>
              Simply enter your classes and look for a buddy that is available
              to connect with. Each class contains a list of buddies that will
              show contact information. Just reach out and message them to study
              together!
            </Text>
          </Collapse>
        </Collapse.Group>
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
