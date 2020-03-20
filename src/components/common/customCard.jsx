import React from "react";

const CustomCard = ({
  src,
  classStyle,
  onEnter,
  onClick,
  text
}) => {
  return (
    <React.Fragment>
      <div className={classStyle} onMouseEnter={onEnter} onClick={onClick}>
        <img src={src} />
        <p>{text}</p>
      </div>
    </React.Fragment>
  );
};

export default CustomCard;
