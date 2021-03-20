import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  return {
    props: {
      VERCEL_GIT_COMMIT_REF: `${process.env.VERCEL_GIT_COMMIT_REF}`,
      CORS_ANYWHERE_IP: `${process.env.CORS_ANYWHERE_IP}`,
      NEXT_PUBLIC_GRAPHQL_URI: `${process.env.NEXT_PUBLIC_GRAPHQL_URI}`,
    },
  };
}

export default function Home(props) {
  console.log("props ===>", props);
  const {
    CORS_ANYWHERE_IP,
    VERCEL_GIT_COMMIT_REF,
    NEXT_PUBLIC_GRAPHQL_URI,
  } = props;

  const isLocal = VERCEL_GIT_COMMIT_REF === "local";
  const isDevelop = VERCEL_GIT_COMMIT_REF === "develop";
  const isProd = VERCEL_GIT_COMMIT_REF === "master";

  console.log("isLocal", isLocal);
  console.log("isDevelop", isDevelop);
  console.log("isProd", isProd);

  const toggleNEXT_PUBLIC_GRAPHQL_URIbasedOnEnv = () => {
    if (isDevelop || isLocal)
      return process.env.NEXT_PUBLIC_GRAPHQL_URI__STAGING;
    if (isProd) return process.env.NEXT_PUBLIC_GRAPHQL_URI;
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>fortytwofiftyseven</h1>
        <div>
          <h2>Pulling Environment variables directly from process.env</h2>
          <p>
            1. VERCEL_GIT_COMMIT_REF[expected to be empty]:{" "}
            <strong>{process.env.VERCEL_GIT_COMMIT_REF}</strong>
            <br />
            2. CORS_ANYWHERE_IP[expect to be empty]:{" "}
            <strong>{process.env.CORS_ANYWHERE_IP}</strong>
            <br />
            3. NEXT_PUBLIC_GRAPHQL_URI[expect to see]:{" "}
            <strong>{process.env.NEXT_PUBLIC_GRAPHQL_URI}</strong>
          </p>
        </div>
        <div>
          <h2>
            Pulling STAGING Environment variables directly from process.env
          </h2>
          <p>
            1. CORS_ANYWHERE_IP[expect to be empty]:{" "}
            <strong>{process.env.CORS_ANYWHERE_IP__STAGING}</strong>
            <br />
            2. NEXT_PUBLIC_GRAPHQL_URI__STAGING[expect to see]:{" "}
            <strong>{process.env.NEXT_PUBLIC_GRAPHQL_URI__STAGING}</strong>
          </p>
        </div>
        <div>
          <h2>
            Pulling in env vars from directly from server call in Get Static
            Props
          </h2>
          <p>
            1. VERCEL_GIT_COMMIT_REF[expected to be empty]:{" "}
            <strong>{VERCEL_GIT_COMMIT_REF}</strong>
            <br />
            2. CORS_ANYWHERE_IP: <strong>{CORS_ANYWHERE_IP}</strong>
            <br />
            3. GRAPHQL_URI[expect to see]:{" "}
            <strong>{NEXT_PUBLIC_GRAPHQL_URI}</strong>
          </p>
        </div>

        <div>
          <h2>
            Showing different NEXT_PUBLIC_GRAPHQL_URI based on
            VERCEL_GIT_COMMIT_REF
          </h2>
          <p>
            if Local or Dev I expect this should end in otherwise it should be
            missing for prod ---staging-->{" "}
            <strong>{toggleNEXT_PUBLIC_GRAPHQL_URIbasedOnEnv()}</strong>
          </p>
        </div>
      </section>
    </Layout>
  );
}
