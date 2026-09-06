import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="kicker">404</p>
      <h1>That page is not in the notebook.</h1>
      <p>The project may have moved, or the address may be incomplete.</p>
      <Link href="/">Return home</Link>
    </main>
  );
}
