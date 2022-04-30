import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Grid, Input, Text, Link, Spacer } from "@nextui-org/react";

// Firebase imports
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/_firebase.config";
import { useState } from "react";
import Router from 'next/router'
import { useEffect } from "react";

function SignUp() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  onAuthStateChanged(auth, (user)=>{
    if (user) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  });
  useEffect(()=>{
    if (isLoggedIn){ 
      Router.push("/home");
    }
  },[isLoggedIn]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Sign Up</h1>
        <Spacer y={2.5} />
        <div className={styles.grid} style={{ flexDirection: "column" }}>
          <Input
            width="300px"
            size="xl"
            clearable
            bordered
            labelPlaceholder="First Name"
          />
          <Spacer y={2} />
          <Input
            width="300px"
            size="xl"
            clearable
            bordered
            labelPlaceholder="Last Name"
          />
          <Spacer y={2} />
          <Input
            width="300px"
            size="xl"
            clearable
            bordered
            labelPlaceholder="Email"
          />
          <Spacer y={2} />
          <Input.Password
            width="300px"
            size="xl"
            clearable
            bordered
            labelPlaceholder="Password"
          />
          <Spacer y={2} />
          <Input.Password
            width="300px"
            size="xl"
            clearable
            bordered
            labelPlaceholder="Confirm Password"
          />
          <Spacer y={2.5} />
          <Text>
            <Link href="/signin">Already have an account?</Link>
          </Text>
          <Spacer y={2.5} />
          <Grid>
            <Button size="xl" color="gradient" auto ghost>
              Sign up
            </Button>
          </Grid>
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

export default SignUp;
