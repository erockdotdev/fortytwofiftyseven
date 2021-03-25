// import Image from 'next/image'
// import Link from 'next/link'

import GlobalStyles from "src/styles/global-styles";
import useGatekeep from "../../hooks/useGatekeep";
import Footer from "../modules/Footer/Footer";
import Nav from "../modules/Nav/Nav";
import { MainStyles } from "src/components/layouts/styles";
import { device } from "src/styles/breakpoints";

import LayoutRoot from "src/components/layouts/LayoutRoot";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
  environment: string;
  hideNav?: boolean;
  hideFooter?: boolean;
}

export default function BasePage({
  children,
  environment,
  hideNav,
  hideFooter,
}: LayoutProps) {
  environment && useGatekeep(environment);
  return (
    <LayoutRoot>
      {hideNav ? "" : <Nav />}
      <MainStyles>{children}</MainStyles>
      {hideFooter ? "" : <Footer />}
    </LayoutRoot>
  );
}
