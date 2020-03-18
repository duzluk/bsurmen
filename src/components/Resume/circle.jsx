import React, { useState } from "react";

const Circle = ({ cx, id }) => {
  const [fill, setFill] = useState("#2F292D");
  return (
    <circle
      id={id}
      cx={cx}
      cy="15"
      r="15"
      fill={fill}
      onClick={() => setFill(fill === "#FF494B" ? "#2F292D" : "#FF494B")}
    />
  );
};

export default Circle;
