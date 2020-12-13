import React from "react";
import ReactTypingEffect from "react-typing-effect";

import "./Home.css";

function Home() {
  return (
    <div id="home" className="bg">
      <ReactTypingEffect
        text={[
          "Hi, I'm Hardik.",
          "A web developer and,",
          " a graphic designer.",
        ]}
        cursor="_"
        speed="100"
        eraseSpeed="100"
        eraseDelay="1000"
        typingDelay="1000"
      />
    </div>
  );
}

export default Home;
