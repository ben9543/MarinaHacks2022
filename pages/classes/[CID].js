import Head from "next/head";
import styles from "../../styles/Home.module.css";
import {
  Image,
  Button,
  Grid,
  Input,
  Text,
  Link,
  Spacer,
  User,
  Card,
  Row,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { getUsersByClassName } from "../../lib/_utils";

function ClassUsers({ users }) {
  console.log(users);
  const router = useRouter();
  const { CID } = router.query;
  return (
    <div className={styles.container}>
      <Head>
        <title>Class Users</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {users.length} StudyBuddies available in {CID}
        </h1>
        <Spacer y={2.5} />
        <div
          className={styles.grid}
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "row",
            columnGap: 10,
            rowGap: 10,
          }}
        >
          {users.map((user) => {
            let firstName = user.firstName;
            let lastName = user.lastName;
            let email = user.email;
            let avatar = user.avatar;
            return (
              <>
                <Card hoverable clickable>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      objectFit="cover"
                      src={avatar}
                      width={100}
                      height={100}
                    />
                  </Card.Body>
                  <Card.Footer justify="flex-start">
                    <Row wrap="wrap" justify="space-between">
                      <Text b>{firstName + " " + lastName}</Text>
                      <Text
                        css={{ color: "$accents4", fontWeight: "$semibold" }}
                      >
                        {email}
                      </Text>
                    </Row>
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

export const getStaticProps = async ({ params }) => {
  const users = await getUsersByClassName(params.CID);
  return {
    props: { users },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
export default ClassUsers;
