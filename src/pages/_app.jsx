import Head from "next/head";
import {MetaData} from 'src/constants/literals'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{MetaData.title}</title>
        <meta
          name={MetaData.viewport.name}
          content={MetaData.viewport.content}
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
