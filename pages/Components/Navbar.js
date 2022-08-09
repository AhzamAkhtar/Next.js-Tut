import Link from "next/link"
const Navbar = () => {
  return (
    <>
       <nav>
      <ul>
      <li>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </li>
      <li>
        <Link href="/home">
          <a>hOME hOME</a>
        </Link>
      </li>
      <li>
        <Link href="/contact/contact2">
          <a>Contact</a>
        </Link>
      </li>
      </ul>
    </nav>
    </>
    )
}

export default Navbar