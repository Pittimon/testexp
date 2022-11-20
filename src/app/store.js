import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "../features/dialog/dialogSlice";
import themeReducer from "../features/theme/themeSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    dialog: dialogReducer,
    theme: themeReducer,
    user: userReducer,
  },
});
