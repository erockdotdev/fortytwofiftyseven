import styled from "styled-components";

const FooterStyles = styled.footer`
  border-top: solid var(--lightGray) 1px;
  padding: 2em;
`;
const FooterRowStyles = styled.div`
  display: flex;
  margin: 0 -2em;
`;
const FooterColumnStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2em;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <h2>I asked you not to invite me back here</h2>
      <FooterRowStyles>
        <FooterColumnStyles>
          <h3>Connections</h3>
          <a>First Limits</a>
          <a>Sexond Másures</a>
          <a>Sexond Máxures</a>
        </FooterColumnStyles>
        <FooterColumnStyles>
          <h3>NÅdals</h3>
          <a>Premar</a>
          <a>Sadar</a>
          <a>Trahdar</a>
        </FooterColumnStyles>
      </FooterRowStyles>
    </FooterStyles>
  );
}
