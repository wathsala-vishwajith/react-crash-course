import { Link } from "react-router"

const NotFound = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-600 hover:underline">
        Return Home
      </Link>
    </div>
  )
}

export default NotFound
