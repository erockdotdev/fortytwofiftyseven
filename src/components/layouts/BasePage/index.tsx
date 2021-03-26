import useGatekeep from "src/hooks/useGatekeep";
import Footer from "src/components/modules/Footer";
import Nav from "src/components/modules/Nav";
import { MainStyles } from "src/components/layouts/BasePage/styles";
import LayoutRoot from "src/components/layouts/LayoutRoot/LayoutRoot";

interface LayoutProps {
  children: React.ReactNode;
  environment?: string;
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
