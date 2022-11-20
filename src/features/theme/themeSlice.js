import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeRed: (state) => {
      state.theme = "black-red";
    },
    setThemeBlue: (state) => {
      state.theme = "blue-white";
    },
    setThemeGold: (state) => {
      state.theme = "black-gold";
    },
    setThemeOri: (state) => {
      state.theme = "";
    },
  },
});

export const { setThemeRed, setThemeGold, setThemeBlue, setThemeOri } =
  themeSlice.actions;

export const selectTheme = (state) => state.theme.theme;

export default themeSlice.reducer;
