import React from "react";

const CustomCard2 = ({
  title,
  classStyle,
  onEnter,
  onClick,
  text,
  srcOverlay,
  imgOverlayStyle,
  cardColor
}) => {
  return (
    <React.Fragment>
      <div className={classStyle} onMouseEnter={onEnter} onClick={onClick}>
        <div className={cardColor}></div>
        <p style={{ fontWeight: "700" }}></p>
        <p>
          <strong>{title}</strong>
          {text}
        </p>
        <div className="overlay">
          <img src={srcOverlay} className={imgOverlayStyle} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomCard2;
