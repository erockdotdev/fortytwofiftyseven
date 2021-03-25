// import Image from 'next/image'
// import Link from 'next/link'

import styled, { createGlobalStyle } from "styled-components";
import GlobalStyles from "src/styles/global-styles";
import Footer from "./Footer";
import Nav from "./Nav";

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
}

export default function Layout({ children, showNav, showFooter }: LayoutProps) {
  return (
    <div>
      {showNav && <Nav />}
      <GlobalStyles />
      <InnerStyles>{children}</InnerStyles>
      {showFooter && <Footer />}
    </div>
  );
}
