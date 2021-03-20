// import Image from 'next/image'
// import Link from 'next/link'

import gatekeep from "../utils/gatekeep";
export default function Layout({
  children,
  environment,
}: {
  children: React.ReactNode;
  environment: string;
}) {
  gatekeep(environment);
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
