import Link from "next/link";

export default function Content() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <ul>
        <li>
          <Link href="/about" />
          About
        </li>
        <li>
          <Link href="/about" />
          About
        </li>
        <li>
          <Link href="/about" />
          About
        </li>
      </ul>
    </div>
  );
}
