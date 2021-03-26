import Link from "next/link";
import { LinkType } from "src/typescript/global-types";

export default function Nav({ link }: { link: LinkType }) {
  return (
    <li>
      <Link href={link.href}>
        <a>{link.label}</a>
      </Link>
    </li>
  );
}
