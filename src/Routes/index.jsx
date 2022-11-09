import React from "react";
import ErrorPage from "Pages/Error404";
import Home from "Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NavigationRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationRouter;
