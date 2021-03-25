import Head from "next/head";
import BasePage from "src/components/layouts/BasePage";
import { VERCEL_GIT_COMMIT_REFS } from "config/env.config";
import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";

export const getServerSideProps: GetStaticProps = async () => {
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
  const { query } = useRouter();
  const { offerId } = query;

  return (
    <BasePage hideNav hideFooter environment={VERCEL_GIT_COMMIT_REF}>
      <Head>
        <title>{title}</title>
      </Head>
      <main
        style={{ margin: "250px auto", maxWidth: "500px", padding: "25px" }}
      >
        AM ZEH Offár ````{offerId}````
      </main>
    </BasePage>
  );
};

export default Home;
