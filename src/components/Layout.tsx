// import Image from 'next/image'
// import Link from 'next/link'

import styled, { createGlobalStyle } from "styled-components";
import GlobalStyles from "src/styles/global-styles";
import useGatekeep from "../utils/useGatekeep";
import Footer from "./Footer";
import Nav from "./Nav";

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

interface LayoutProps {
  children: React.ReactNode;
  environment: string;
  showNav?: boolean;
  showFooter?: boolean;
}

export default function Layout({
  children,
  environment,
  showNav,
  showFooter,
}: LayoutProps) {
  useGatekeep(environment);
  return (
    <div>
      {showNav && <Nav />}
      <GlobalStyles />
      <InnerStyles>{children}</InnerStyles>
      {showFooter && <Footer />}
    </div>
  );
}
