import { createSlice } from "@reduxjs/toolkit";

export type TName = {
  _id?: string;
  firstName: string;
  lastName: string;
}

export type TUser = {
  _id: string;
  name : TName ;
  image : string ;
  address : string ;
  email: string;
  phone : number ;
  role: string;
};

type TAuthState = {
  user: null | TUser;
};

const initialState: TAuthState = {
  user: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserForNavbar: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    logoutForNavbar: (state) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { setUserForNavbar, logoutForNavbar } = userSlice.actions;