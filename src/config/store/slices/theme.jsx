import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const theme = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleTheme } = theme.actions;

export default theme.reducer;
