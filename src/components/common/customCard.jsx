import React from "react";

const LogoCard = ({ src, classStyle, onEnter, onClick }) => {
  return (
    <React.Fragment>
      <div className={classStyle} onMouseEnter={onEnter} onClick={onClick}>
        <img src={src} />
      </div>
    </React.Fragment>
  );
};

export default LogoCard;
