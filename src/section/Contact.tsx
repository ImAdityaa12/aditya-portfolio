import React from 'react'
import "../scss/sections/_contact.scss"
import Button from "@/components/Button";

function Contact() {
  return (
    <div
      className="contact"
      id="contact"
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Although I am currently looking for an new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I&apos;ll
        try my best to get back to you!
      </p>
      <div className="contact-cta">
        <Button link="mailto:adityagupta1291@gmail.com" text="Say Hello" />
      </div>
    </div>
  );
}

export default Contact;