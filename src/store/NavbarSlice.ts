import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INavbarState {
  open: boolean;
}

const initialState: INavbarState = {
  open: false,
};

export const navbarSlice = createSlice({
  name: "navbarSlice",
  initialState,
  reducers: {
    setNavbarOpen(state) {
      state.open = true;
    },

    setNavbarClose(state) {
      state.open = false;
    },
  },
});

export const { setNavbarOpen, setNavbarClose } = navbarSlice.actions;
export const navbarReducer = navbarSlice.reducer;
