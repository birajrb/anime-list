import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Anime</h1>
      <div className="links">
        <Link to="/anime-list/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
