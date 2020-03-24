import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];

const trans = (x, y, s) =>
  `perspective(900px) rotateX(0) rotateY(0) scale(${s})`;
const CustomCard = ({ src, classStyle, onEnter, onClick, text }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 600, friction: 250 }
  }));

  return (
    <React.Fragment>
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <div className={classStyle} onMouseEnter={onEnter} onClick={onClick}>
          <img src={src} alt="tech logos"/>
          <p>{text}</p>
        </div>
      </animated.div>
    </React.Fragment>
  );
};

export default CustomCard;
