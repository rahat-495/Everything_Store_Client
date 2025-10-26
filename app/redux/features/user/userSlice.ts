
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TUser {
  _id: string;
  name: {
    firstName: string;
    lastName: string;
    _id: string;
  };
  image: string;
  email: string;
  phone: string;
  address: string;
  isActive: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
}

const initialState: { user : null | TUser } = {
  user : null ,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserFor: (state, action) => {
      const { user } = action?.payload;
      return state.user = user;
    },
    logoutUserForN : (state) => {
      state.user = null ;
    },
  },
});

export const { setUserFor , logoutUserForN } = userSlice.actions;
export default userSlice.reducer;
