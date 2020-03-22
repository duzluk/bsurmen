import React from "react";
import { urlSocialMedia, pathSocialIcon } from "../../data";

const HomeTextContent = () => {
  return (
    <div className="home">
      <h5>Burak Sürmen</h5>
      <h1>Front end web application developer</h1>
      <h3>Based in Istanbul</h3>

      {urlSocialMedia.map((e, i) => (
        <a href={urlSocialMedia[i]}>
          <img src={pathSocialIcon[i]} />
        </a>
      ))}
    </div>
  );
};

export default HomeTextContent;