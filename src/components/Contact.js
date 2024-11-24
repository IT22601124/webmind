import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>
        Address: Moscow, Kutuzovsky proezd, 16 – s1
      </p>
      <p>Phone: 8 495 984–7471</p>
      <p>Email: <a href="mailto:sorel@sorel-eco.ru">sorel@sorel-eco.ru</a></p>

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
