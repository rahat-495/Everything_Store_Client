
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
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
};

const initialState: UserState = {
  _id: "",
  name: {
    firstName: "",
    lastName: "",
    _id: "",
  },
  image: "",
  email: "",
  phone: "",
  address: "",
  isActive: false,
  role: "user",
  createdAt: "",
  updatedAt: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
