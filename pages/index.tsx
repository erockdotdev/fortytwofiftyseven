import Head from "next/head";
import Layout from "components/layout";
import { VERCEL_GIT_COMMIT_REFS } from "config/env.config";

export async function getStaticProps() {
  return {
    props: {
      VERCEL_GIT_COMMIT_REF: `${process.env.VERCEL_GIT_COMMIT_REF}`,
    },
  };
}

interface HomeProps {
  VERCEL_GIT_COMMIT_REF: string;
}

export default function Home({ VERCEL_GIT_COMMIT_REF }: HomeProps) {
  const title = `4257 ${
    VERCEL_GIT_COMMIT_REF !== VERCEL_GIT_COMMIT_REFS.MASTER
      ? `| ${VERCEL_GIT_COMMIT_REF}`
      : ""
  }`;
  return (
    <Layout environment={VERCEL_GIT_COMMIT_REF}>
      <Head>
        <title>{title}</title>
      </Head>
      <main
        style={{ margin: "250px auto", maxWidth: "500px", padding: "25px" }}
      >
        <h2>4257</h2>
        <p>the highest quality strangeness</p>
      </main>
    </Layout>
  );
}
