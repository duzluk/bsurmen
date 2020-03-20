import React from "react";
import { Link } from "react-router-dom";

const BackArrow = ({backarrowWrapper}) => {
  return (
    <div className={backarrowWrapper}>
      <Link to="/">
        <i className="fas fa-arrow-left"></i>
      </Link>
    </div>
  );
};

export default BackArrow;
