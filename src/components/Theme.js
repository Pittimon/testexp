import React, { useState } from "react";
import "../styles/Theme.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  setThemeGold,
  setThemeRed,
  setThemeBlue,
  setThemeOri,
  selectTheme,
} from "../features/theme/themeSlice";

const Theme = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
    console.log(anchorEl);
  };

  const handleOri = () => {
    dispatch(setThemeOri());
    setAnchorEl(null);
    console.log("eiei");
  };

  const handleGold = () => {
    dispatch(setThemeGold());
    setAnchorEl(null);
  };

  const handleRed = () => {
    dispatch(setThemeRed());
    setAnchorEl(null);
  };

  const handleBlue = () => {
    dispatch(setThemeBlue());
    setAnchorEl(null);
  };

  return (
    <>
      <div className={theme ? `fixed-btn-${theme}` : "fixed-btn"}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleOpen}
          style={{
            color: "white",
            fontWeight: 900,
            fontSize: 18,
          }}
        >
          THEME
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleOri}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={handleGold}
            style={{
              fontWeight: 800,
            }}
          >
            GOLD
          </MenuItem>
          <MenuItem
            onClick={handleRed}
            style={{
              fontWeight: 800,
            }}
          >
            RED
          </MenuItem>
          <MenuItem
            onClick={handleBlue}
            style={{
              fontWeight: 800,
            }}
          >
            BLUE
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Theme;
