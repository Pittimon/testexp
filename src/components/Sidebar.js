import React, { useState } from "react";
import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSidebar, setCloseSidebar } from "../features/dialog/dialogSlice";
import { selectTheme } from "../features/theme/themeSlice";

const Sidebar = () => {
  const sidebar = useSelector(selectSidebar);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setCloseSidebar());
  };

  return (
    <div className={sidebar ? `sidebar sidebar-open ${theme}` : "sidebar"}>
      <NavLink onClick={handleClose} className={`navlink ${theme}`} to="/home">
        <i className="ri-home-2-line"></i>Home
      </NavLink>
      <NavLink
        onClick={handleClose}
        className={`navlink ${theme}`}
        to="/aboutus"
      >
        <i className="ri-user-3-line"></i>About us
      </NavLink>
    </div>
  );
};

export default Sidebar;
