import GlobalStyles from "src/styles/global-styles";

export default function LayoutRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
