import { Link } from "react-router-dom";
import Logo from "@/assets/logo-no-background.svg";
const Header = () => {
  return (
    <header className="py-6">
      <div className="2xl:max-w-screen-2xl px-5 mx-auto flex justify-between items-center">
        <figure className="hidden md:inline-block">
          <Link to="/">
            <img
              src={Logo}
              className="max-h-10 w-fit select-none"
              draggable="false"
              alt="Retreat"
            />
          </Link>
        </figure>

        <span className="flex space-x-2 ms-auto">
          <Link
            to="/sign-in"
            className="flex items-center px-4 py-2 text-md font-[500] text-white bg-primary-400 rounded-[10px] hover:rounded-xl hover:shadow-md transition-all duration-600">
            Sign In
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
