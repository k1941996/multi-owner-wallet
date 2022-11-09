import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: "",
  token: "",
};

const setAuth = (state, action) => {
  state.isAuthenticated = true;
  // token = action.payload;
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    setAuth,
  },
});

export default AuthSlice.reducer;
