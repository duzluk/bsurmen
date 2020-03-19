import React from "react";

const CustomCard = ({
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
        <img src={src} />
        <p>{text}</p>
        <div className="overlay">
          <img src={srcOverlay} className={imgOverlayStyle}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomCard;
