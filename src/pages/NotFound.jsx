import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="text-center mt-20">
    <h1 className="text-6xl text-red-500">404</h1>
    <p>Page Not Found</p>
    <Link to="/" className="text-blue-600">
      Go Home
    </Link>
  </div>
);

export default NotFound;