import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div>ErrorPage</div>
      <Link to="/home">Navigate to Homepage</Link>
    </div>
  );
};

export default ErrorPage;
