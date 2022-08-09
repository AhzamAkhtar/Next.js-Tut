// DYNAMIC ROUTING
import { useRouter } from "next/router"
const pageNo = () => {
    const router = useRouter()
    const pageNumber  = router.query.pageNo
  return (
    <div>
        <h1>
            My Blog {pageNumber} Content
        </h1>
    </div>
  )
}

export default pageNo