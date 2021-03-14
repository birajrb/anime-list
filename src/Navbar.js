import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/anime-list">
        <h1>Anime</h1>
      </Link>
      <div className="links">
        <Link to="/anime-list">Home</Link>
        <Link to="/anime-list/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
