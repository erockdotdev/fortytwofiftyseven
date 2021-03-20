import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      TEST_VAR: `${process.env.TEST_VAR}`,
      VERCEL_GIT_COMMIT_REF: `${process.env.VERCEL_GIT_COMMIT_REF}`
    }
  }
}

export default function Home({allPostsData, TEST_VAR, VERCEL_GIT_COMMIT_REF}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>fortytwofiftyseven</h1>
        <p>PUBLIC_ENV_TEST_VAR: <strong>{process.env.NEXT_PUBLIC_TEST_VAR}</strong></p>
        <p>SERVER_TEST_VAR from getStaticProps: <strong>{TEST_VAR}</strong></p>
        <p>VERCEL_GIT_COMMIT_REF: <strong>{VERCEL_GIT_COMMIT_REF}</strong></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
