import Link from "next/link"
import Navbar from "./Components/Navbar"
const index = () => {
  return (
    <>
    <div>
    <Navbar/>
    {/*<nav>
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
    </nav>*/}
    </div>
    <h1>Hello World</h1>
    
    </>
  )
}

export default index