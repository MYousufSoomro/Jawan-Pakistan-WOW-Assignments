import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const userData = createSlice({
  name: "userData",
  initialState,
  //   reducers: {
  //   },
});

export default userData.reducer;
