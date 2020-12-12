import React from "react";
import "./aboutme.css";
import Container from "react-bootstrap/Container";

function Aboutme() {
  return (
    <Container id="about">
      <h3 className="title">About me</h3>
      <div className="abt">
        <img
          alt="this is my pic"
          src={`${process.env.PUBLIC_URL}/assets/myimage.jpg`}
        />
        <p>
          Given n Magnets which are placed linearly, with each magnet to be
          considered as of point object. Each magnet suffers force from its left
          sided magnets such that they repel it to the right and vice versa. All
          forces are repulsive. The force being equal to the distance (1/d , d
          being the distance). Now given the positions of the magnets, the task
          to find all the points along the linear line where net force is ZERO.
          Note: Distance have to be calculated with precision of
          0.0000000000001.
        </p>
      </div>
    </Container>
  );
}

export default Aboutme;
