import React from "react";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>
        <span>03. </span>Get In Touch
      </h2>
      <p>
        My expected graduation date is March 2023, and I am looking for
        full-time opportunities after graduation. Send me a mail If you are
        interested.
      </p>
      <a href="mailto:li.mos@northeastern.edu">
        <button>Contact Me</button>
      </a>
    </div>
  );
};

export default Contact;
