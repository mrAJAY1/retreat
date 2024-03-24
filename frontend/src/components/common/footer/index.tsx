import logoBlack from 'assets/logo-black-transparent.svg';
import {Link} from 'react-router-dom';
import Divider from 'common/divider';

const Footer = () => {
  return (
    <footer className="bg-secondary-400 py-4">
      <div className="mx-auto flex w-full flex-col items-center gap-y-2">
        <figure>
          <Link to="/">
            <img
              src={logoBlack}
              alt="Retreat"
              className="max-h-6 w-fit select-none"
              draggable="false"
            />
          </Link>
        </figure>
        <Divider />
        <span className="flex flex-col items-center text-xs md:flex-row">
          <span className="flex gap-2">
            <span>
              &copy;
              {' ' + new Date().getFullYear()} Ajay Prakash, All rights
              reserved.
            </span>
            <span className="me-2 hidden md:inline-block">&middot;</span>{' '}
          </span>
          <ul className="flex h-fit flex-wrap gap-x-2 tracking-tight">
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
