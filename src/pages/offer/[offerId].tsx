import Head from "next/head";
import Layout from "src/components/Layout";
import { VERCEL_GIT_COMMIT_REFS } from "config/env.config";
import { GetStaticProps } from "next";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";

const OfferID = () => {
  const { query } = useRouter();
  const { offerId } = query;

  return (
    <Layout>
      <Head>
        <title>4257 | Offer</title>
      </Head>
      <main
        style={{ margin: "250px auto", maxWidth: "500px", padding: "25px" }}
      >
        AM ZEH Offár ````{offerId}````
      </main>
    </Layout>
  );
};

export default OfferID;
