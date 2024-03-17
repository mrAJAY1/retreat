import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex gap-10">
      <li className="nav-item active">
        <Link to="/">Stays</Link>
      </li>
      <li className="nav-item">
        <Link to="/">Experiences</Link>
      </li>
      <li className="nav-item">
        <Link to="/">Online Experiences</Link>
      </li>
    </ul>
  );
};

export default Navbar;
