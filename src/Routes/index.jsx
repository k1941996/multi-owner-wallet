import React from "react";
import ErrorPage from "Pages/Error404";
import Home from "Pages/Home";
import Connect from "Pages/Connect";
import Assets from "Pages/Assets";
import Transactions from "Pages/Transactions";


import { BrowserRouter, Routes, Route } from "react-router-dom";

const NavigationRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<Connect />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationRouter;


