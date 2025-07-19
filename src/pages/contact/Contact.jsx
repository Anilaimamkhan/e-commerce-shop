import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <form action="https://formspree.io/f/xzzgbowd" method="POST">
        <input type="text" placeholder="Enter your name..." name="name" required autoComplete="off" />
        <input type="email" placeholder="Enter your Email..." name="email" required autoComplete="off" />
        <textarea name="message" placeholder="Write your message..." required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

