import React from "react";
import "remixicon/fonts/remixicon.css";
import "../styles/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar } from "../features/dialog/dialogSlice";
import { selectTheme } from "../features/theme/themeSlice";
import { setLogout } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const Navigate = useNavigate();

  const openSidebar = () => {
    dispatch(setOpenSidebar());
  };

  const handleLogout = () => {
    dispatch(setLogout());
    Navigate("/");
  };
  return (
    <div className={theme ? `header-${theme}` : "header"}>
      <div className="burger" onClick={openSidebar}>
        <i className="ri-menu-line"></i>
      </div>
      <a
        onClick={handleLogout}
        className={theme ? `logout-${theme}` : "logout"}
      >
        logout
      </a>
    </div>
  );
};

export default Header;
