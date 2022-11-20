import React from "react";
import "../styles/Backdrop.css";
import { useDispatch, useSelector } from "react-redux";
import { selectSidebar, setCloseSidebar } from "../features/dialog/dialogSlice";

const Backdrop = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector(selectSidebar);

  const closeSidebar = () => {
    dispatch(setCloseSidebar());
  };

  return (
    <div
      onClick={closeSidebar}
      className={sidebar ? "backdrop backdrop-open" : "backdrop"}
    ></div>
  );
};

export default Backdrop;
