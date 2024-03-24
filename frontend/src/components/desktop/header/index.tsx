import Logo from 'assets/logo-no-background.svg';
import LogoPin from 'assets/logo-pin.svg';
import {cn} from 'lib/utils';
import {Globe} from '@phosphor-icons/react';
import {useMediaQuery} from 'react-responsive';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import ProfileMenu from './ProfileMenu';

const DesktopHeader = () => {
  const isXl = useMediaQuery({minWidth: 1024});
  return (
    <div className="mx-auto flex flex-wrap items-center justify-between px-10 2xl:px-20">
      <figure className="inline-block" aria-label="Logo">
        <Link to="/">
          <img
            src={isXl ? Logo : LogoPin}
            className={cn('w-fit', {
              'max-h-10': !isXl,
              'max-h-9': isXl,
            })}
            alt="Retreat"
          />
        </Link>
      </figure>
      <div className="flex items-center gap-4 text-sm ">
        <div className="hidden items-center md:flex">
          <Link
            to="/"
            className="rounded-full p-3 font-medium hover:bg-secondary-200">
            Become a host
          </Link>
          <button className="rounded-full p-3 hover:bg-secondary-200">
            <Globe weight="light" size={22} />
          </button>
        </div>
        <ProfileMenu />
      </div>
      <div className="pointer-events-none left-1/2 top-1/2 mt-5 flex w-full flex-col items-center text-nowrap lg:absolute lg:mt-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
        <div className="pointer-events-auto relative w-full">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
