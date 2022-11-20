import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dialog: false,
  sidebar: false,
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    setDialog: (state) => {
      state.dialog = !state.dialog;
    },
    setOpenSidebar: (state) => {
      state.sidebar = true;
    },
    setCloseSidebar: (state) => {
      state.sidebar = false;
    },
  },
});

export const { setDialog, setOpenSidebar, setCloseSidebar } =
  dialogSlice.actions;

export const selectDialog = (state) => state.dialog.dialog;
export const selectSidebar = (state) => state.dialog.sidebar;

export default dialogSlice.reducer;
