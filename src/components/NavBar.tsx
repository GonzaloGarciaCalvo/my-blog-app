import Link from "next/link";

export function NavBar() {
  return (
    <nav>
      <Link href={"./dashboard"}>
        Dashboard
      </Link>
      <Link href={"./"}>Home</Link>
    </nav>
  )
}
