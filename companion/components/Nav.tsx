import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <Image src="/assets/nbw-logo.png" alt="Northbound Wines" width={690} height={64} priority />
        <strong>Editorial Companion</strong>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/regions">Regions</Link>
        <Link href="/producers">Producers</Link>
        <Link href="/grapes">Grapes</Link>
        <Link href="/wines">Wines</Link>
        <Link href="/studio">Studio</Link>
      </nav>
    </header>
  );
}
