import React from "react";
import imageinsrc from "./imageinsrc.png";
import "./style.css";

const App = () => {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="titlered">Heni</h1>
        <br />
        <img src={imageinsrc} />
        <br />
        <img src="/imageinpublic.png" />
      </div>
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default App;
