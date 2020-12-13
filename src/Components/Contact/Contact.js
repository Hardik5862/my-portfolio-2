import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div id="contact">
      <h3 className="title">Contact</h3>
      <p>Feel free to contact me on my social media.</p>
      <div className="social-media">
        <a href="https://instagram.com/hardik0casr/">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com/hardik.sachan.583/">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://github.com/Hardik5862">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/hardik-sachan-b0ab7b1a2">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
