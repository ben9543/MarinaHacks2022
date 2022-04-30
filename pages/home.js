import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Card,
  Button,
  Grid,
  Input,
  Link,
  Text,
  Spacer,
} from "@nextui-org/react";

// Firebase imports
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/_firebase.config";
import { useState } from "react";
import Router from "next/router";
import { useEffect } from "react";
import { getCourses, getUsersByClassName } from "../lib/_utils";

function Home({ courseData, users }) {
  const [isLoggedIn, setIsLoggedIn] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  });

  useEffect(() => {
    if (isLoggedIn) {
      Router.push("/");
    }
  }, [isLoggedIn]);

  // sort courseData by course code
  const sortedCourseData = courseData.sort((a, b) => {
    if (a.code < b.code) return -1;
    if (a.code > b.code) return 1;
    return 0;
  });
  

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
        {/* search the courseData object for courses */}
        <Input clearable label="Search" placeholder="Name or class" />
        <Spacer y={2.5} />
        <Grid>
          <Link href="/buddies">
            <Button size="xl" shadow color="gradient" auto>
              Browse StudyBuddies
            </Button>
          </Link>
        </Grid>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            rowGap: 80,
            columnGap: 80,
            maxWidth: 1200,
          }}
        >
          {courseData.map((course) => {
            let id = course.id;
            return (
              <>
                <Card css={{ mw: "330px" }}>
                  <Text h4>{course.code}</Text>
                  <Text>{course.title}</Text>
                  <Card.Footer>
                    <Link color="primary" href={`/classes/${course.code}`}>
                      View StudyBuddies
                    </Link>
                  </Card.Footer>
                </Card>
              </>
            );
          })}
        </div>
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

export const getStaticProps = async () => {
  const courses = await getCourses();
  const users = await getUsersByClassName("CECS 100");

  let result = [];
  courses.forEach((doc) => {
    result.push(doc.data());
  });
  return {
    props: { courseData: result, users},
  };
};

export default Home;
