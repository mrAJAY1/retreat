import {List} from '@phosphor-icons/react';
import {useEffect, useState} from 'react';
import UserCircle from '@/assets/user-circle.svg';
import ProfileMenuList from './ProfileMenuList';

function ProfileMenu() {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement)) {
        return;
      }
      if (!e.target.closest('#menu-container')) {
        setIsHidden(true);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div
      role="menu"
      id="menu-container"
      aria-label="User menu"
      className={`relative rounded-full border transition-shadow hover:shadow-[0_2px_5px_0_rgba(0,0,0,0.2)] ${
        !isHidden && ' shadow-[0_2px_5px_0_rgba(0,0,0,0.2)]'
      }`}>
      <div
        role="button"
        aria-label="User menu button"
        onClick={() => setIsHidden(!isHidden)}
        className="relative ms-auto flex items-center space-x-1 ps-3 hover:cursor-pointer">
        <List size={28} />
        <span>
          <img src={UserCircle} alt="user" />
        </span>
      </div>
      {!isHidden && <ProfileMenuList />}
    </div>
  );
}

export default ProfileMenu;
