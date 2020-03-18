import React from "react";
import Circle from "./circle";

const Progress = () => {
  return (
    <svg
      width="830"
      height="31"
      viewBox="0 0 830 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="progress">
        <path
          id="Arrow 1"
          d="M829.414 17.4143C830.195 16.6332 830.195 15.3669 829.414 14.5859L816.686 1.85794C815.905 1.07689 814.639 1.07689 813.858 1.85793C813.077 2.63898 813.077 3.90531 813.858 4.68636L825.172 16.0001L813.858 27.3138C813.077 28.0948 813.077 29.3612 813.858 30.1422C814.639 30.9233 815.905 30.9233 816.686 30.1422L829.414 17.4143ZM8 18L828 18.0001L828 14.0001L8 14L8 18Z"
          fill="#2F292D"
        />
        <Circle id="edu1" cx="15" fill="#2F292D" />
        <Circle id="edu1" cx="190" />
        <Circle id="edu1" cx="379" />
        <Circle id="edu1" cx="581" />
        <Circle id="edu1" cx="743" />
      </g>
    </svg>
  );
};

export default Progress;
