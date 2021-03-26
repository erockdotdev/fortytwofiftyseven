import Head from "next/head";
import BasePage from "src/components/layouts/BasePage";
import { VERCEL_GIT_COMMIT_REFS } from "config/env.config";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      VERCEL_GIT_COMMIT_REF: `${process.env.VERCEL_GIT_COMMIT_REF}`,
    },
  };
};
interface HomeProps {
  VERCEL_GIT_COMMIT_REF: string;
}

const Home = ({ VERCEL_GIT_COMMIT_REF }: HomeProps) => {
  const title = `4257 ${
    VERCEL_GIT_COMMIT_REF !== VERCEL_GIT_COMMIT_REFS.MASTER
      ? `| ${VERCEL_GIT_COMMIT_REF}`
      : ""
  }`;
  return (
    <BasePage environment={VERCEL_GIT_COMMIT_REF}>
      <Head>
        <title>{title}</title>
      </Head>
      <main
        style={{
          margin: "250px auto",
          maxWidth: "500px",
          padding: "0 25px",
        }}
      >
        <h2>4257</h2>
        <p>the highest quality strangeness</p>
      </main>
    </BasePage>
  );
};

export default Home;
