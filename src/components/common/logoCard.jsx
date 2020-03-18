import React from "react";

const LogoCard = ({ src }) => {
  return (
    <React.Fragment>
      <div className="logoCard">
        <img src={src}/>
      </div>
    </React.Fragment>
  );
};

export default LogoCard;
