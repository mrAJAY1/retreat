import { Link } from "react-router-dom";
import Logo from "@/assets/logo-no-background.svg";
import ProfileMenu from "./ProfileMenu";
import Navbar from "./Navbar";
import { Globe } from "@phosphor-icons/react";

const Header = () => {
  return (
    <header aria-label="header" className="py-6 relative">
      <div className="2xl:max-w-screen-2xl px-5 mx-auto flex justify-between items-center">
        <figure className="inline-block" aria-label="Logo">
          <Link to="/">
            <img
              src={Logo}
              className="max-h-9 w-fit select-none"
              alt="Retreat"
            />
          </Link>
        </figure>
        <Navbar />
        <div className="flex gap-4 items-center text-sm ">
          <div className="hidden md:flex items-center">
            <Link to="/" className="rounded-full p-3 hover:bg-secondary-200">
              Become a host
            </Link>
            <button className="p-3 hover:bg-secondary-200 rounded-full">
              <Globe weight="light" size={22} />
            </button>
          </div>

          <ProfileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
