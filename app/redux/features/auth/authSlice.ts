
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TName = {
    firstName: string;
    lastName: string;
}

export type TUser = {
  userId: string;
  name : TName ;
  image : string ;
  address : string ;
  email: string;
  phone : number ;
  role: string;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
export const { setUser, logout } = authSlice.actions;
export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
