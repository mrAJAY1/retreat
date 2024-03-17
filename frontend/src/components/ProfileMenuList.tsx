import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LoginOrSignup from "./LoginOrSignup";
import { useState } from "react";

const ProfileMenuList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <motion.ul
      className=" bg-white absolute right-0 rounded-xl w-fit  shadow-[0_0_10px_0_rgba(0,0,0,0.2)]"
      id="user-menu"
      initial={{ top: 0, opacity: 0 }}
      animate={{ top: "calc(100% + 10px)", opacity: 1 }}
      transition={{
        duration: 0.1,
        opacity: { delay: 0.01, ease: "easeInOut" },
      }}
    >
      {isLoggedIn ? (
        <>
          <li>
            <Link to="/notifications" className="menu-item block">
              Notifications
            </Link>
          </li>
          <li>
            <Link to="/reservations" className="menu-item block">
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="menu-item block">
              Wishlist
            </Link>
          </li>
          <li className="border-t text-nowrap">
            <Link to="/account" className="menu-item block">
              Account
            </Link>
          </li>
        </>
      ) : (
        <>
          <li role="button">
            <LoginOrSignup className="menu-item" />
          </li>
          <li className="border-t text-nowrap">
            <Link to="/host" className="menu-item block">
              Become a host
            </Link>
          </li>
        </>
      )}

      <li>
        <Link to="/help" className="menu-item block">
          Help Center
        </Link>
      </li>
    </motion.ul>
  );
};

export default ProfileMenuList;
