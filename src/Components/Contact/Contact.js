import React from 'react';
import './contact.css';

function Contact() {
  return (
     <div id="contact">
       <h3 className="title">Contact<hr /></h3>
       <p>Feel free to contact me on my social media.</p>
        <div className="social-media">
        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        <a href="https://twitter.com"><i className='fab fa-twitter'></i></a>
        <a href="https://github.com/Hardik5862"><i className='fab fa-github'></i></a>
        <a href="https://linkedin.com/in/hardik-sachan-b0ab7b1a2"><i className='fab fa-linkedin-in'></i></a>
        </div>
      </div>
  );
}

export default Contact;