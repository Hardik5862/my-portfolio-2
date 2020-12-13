import React from "react";
import "./aboutme.css";
import Container from "react-bootstrap/Container";

function Aboutme() {
  return (
    <div id="about">
      <h3 className="title">About me</h3>
      <Container>
        <div className="abt">
          <img
            alt="this is my pic"
            src={`${process.env.PUBLIC_URL}/assets/myimage.png`}
          />
          <p>
            "I am a Web Developer and a graphic designer. I have acquired the
            basic knowledge of Web Development under the guidance of Mr. Andrei.
            From there on, I have worked on my skills and sharpened them. I am
            also a self taught graphic designer and worked for three youtube
            channels."
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Aboutme;
