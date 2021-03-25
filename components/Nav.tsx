import styled from "styled-components";

const NavStyles = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    li {
      list-style-type: none;
      padding: 2em;
      color: var(--blurp);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>Home</li>
        <li>Elemental Home</li>
        <li>Inner Void</li>
      </ul>
    </NavStyles>
  );
}
