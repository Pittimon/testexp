import React from "react";
import "../styles/Footer.css";
import { selectTheme } from "../features/theme/themeSlice";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className={theme ? `footer ${theme}` : "footer"}>
      <p className={theme ? `copyright-${theme}` : "copyright"}>
        Copyright © All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
