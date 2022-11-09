import { configureStore } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
import authReducer from "ReduxStore/Features/Auth/authSlice";


const Store = configureStore({
  reducer: {
    auth: authReducer,
  }
});

export default Store;
