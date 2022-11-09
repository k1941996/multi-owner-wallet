import React from "react";
import { Link } from "react-router-dom";
import Header from "Components/Header";
import Footer from "Components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div>Home</div>
      <Link to="/error">Navigate to Error Page</Link>
      <Footer />
    </div>
  );
};

export default Home;
