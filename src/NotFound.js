import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Error 404</h2>
      <p>Page Not Found</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
