import React from "react";
import "../styles/Aboutus.css";
import Typical from "react-typical";
import { useSelector } from "react-redux";
import { selectTheme } from "../features/theme/themeSlice";

const Aboutus = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className="about-screen">
      <div className="about-gradient"></div>
      <div className="about-body">
        <h1>
          {" "}
          <Typical
            loop={Infinity}
            steps={[
              "Are you ready for travel again. 🌐 ",
              50,
              "Let's Guess!! 🚩",
              200,
            ]}
          />
        </h1>
        <h2>What province next? Get this hint🦪.</h2>
        <h3>What do you need to know? · Focus on safety</h3>
        <div className="about-contact">
          <a
            href="https://resume-ptm.herokuapp.com/"
            target="_blank"
            className={theme ? `about-getstarted-${theme}` : "about-getstarted"}
            rel="noreferrer"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
