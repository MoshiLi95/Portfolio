import React from "react";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>
        <span>03. </span>Get In Touch
      </h2>
      <p>
        Although I’m not currently pursuing my master's, I am looking for
        internships and co-ops starting summer 2022. Send me a mail If you are
        interested.
      </p>
      <a href="mailto:li.mos@northeastern.edu">
        <button>Contact Me</button>
      </a>
    </div>
  );
};

export default Contact;
