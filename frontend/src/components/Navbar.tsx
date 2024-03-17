import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="hidden lg:flex gap-10 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <li className="nav-item !text-black">
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
