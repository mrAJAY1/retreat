import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Globe } from "@phosphor-icons/react";
import ProfileMenu from "./ProfileMenu";
import Navbar from "./Navbar";
import Logo from "@/assets/logo-no-background.svg";
import LogoPin from "@/assets/logo-pin.svg";
import mergeCn from "@/utils/mergeCn";
import SearchBar from "./SearchBar";

const DesktopHeader = () => {
  const isXl = useMediaQuery({ minWidth: 1024 });
  return (
    <div className="2xl:px-20 px-10 mx-auto flex justify-between items-center flex-wrap">
      <figure className="inline-block" aria-label="Logo">
        <Link to="/">
          <img
            src={isXl ? Logo : LogoPin}
            className={mergeCn("w-fit", {
              "max-h-10": !isXl,
              "max-h-9": isXl,
            })}
            alt="Retreat"
          />
        </Link>
      </figure>
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
      <div className="flex flex-col  items-center text-nowrap w-full lg:absolute left-1/2 top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
        <Navbar />
        <div className="relative w-full">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
