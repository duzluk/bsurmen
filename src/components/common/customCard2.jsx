import React from "react";

const CustomCard2 = ({
  src,
  classStyle,
  onEnter,
  onClick,
  text,
  srcOverlay,
  imgOverlayStyle
}) => {
  return (
    <React.Fragment>
      <div className={classStyle} onMouseEnter={onEnter} onClick={onClick}>
        <p>{text}</p>
        <div className="overlay">
          <img src={srcOverlay} className={imgOverlayStyle}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomCard2;
