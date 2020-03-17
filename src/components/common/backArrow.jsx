import React from "react";
import { Link } from "react-router-dom";

const BackArrow = () => {
  return (
    <Link to="/">
      <i className="fas fa-arrow-left"></i>
    </Link>
  );
};

export default BackArrow;
