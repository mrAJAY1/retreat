import logoBlack from "@/assets/logo-black-transparent.svg";
import { Link } from "react-router-dom";
import Divider from "./Divider";
const Footer = () => {
  return (
    <footer className="bg-secondary-400 py-4">
      <div className="w-full mx-auto flex flex-col items-center gap-y-2">
        <figure>
          <Link to="/">
            <img
              src={logoBlack}
              alt="Retreat"
              className="w-fit max-h-6 select-none"
              draggable="false"
            />
          </Link>
        </figure>
        <Divider />
        <span className="text-xs flex flex-col items-center md:flex-row">
          <span className="flex gap-2">
            <span>
              &copy;
              {" " + new Date().getFullYear()} Ajay Prakash, All rights
              reserved.
            </span>
            <span className="hidden md:inline-block me-2">&middot;</span>{" "}
          </span>
          <ul className="tracking-tight flex flex-wrap gap-x-2 h-fit">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer">
                Privacy Policy
              </a>
            </li>
            <span>&middot;</span>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer">
                Terms of Service
              </a>
            </li>
          </ul>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
