import styled from "styled-components";
import { homeLink, navLinks } from "src/components/modules/Nav/links";
import Link from "next/link";
import { LinkType } from "src/typescript/global-types";
import NavLink from "src/components/modules/Nav/NavLink";

const NavStyles = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    li {
      list-style-type: none;
      padding: 1em;
      color: var(--blurp);
      a {
        color: var(--blurp);
      }
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        {navLinks.map((link: LinkType) => (
          <NavLink link={link} />
        ))}
        <li>
          <a>Inner Void</a>
        </li>
      </ul>
    </NavStyles>
  );
}
