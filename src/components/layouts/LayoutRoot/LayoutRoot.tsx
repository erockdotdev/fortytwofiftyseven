// import Head from "next/head";
import GlobalStyles from "src/styles/global-styles";

export default function LayoutRoot({
  children,
}: // metadata
{
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Head> </Head> */}
      <GlobalStyles />
      {children}
    </>
  );
}
