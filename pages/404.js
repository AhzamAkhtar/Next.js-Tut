
// for error page , Your file name should
// be 404.js
import Link from "next/link"
const ErrorPage = () => {
  return (
    
    <>
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a>Return Home</a>
                </Link>
            </li>
        </ul>
    </nav>
        <h1>Error Page</h1>
    </>
  )
}

export default ErrorPage