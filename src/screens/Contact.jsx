import React, { useRef } from "react";
import styles from "../styles/Contact.module.css";
import { FaEnvelope, FaTiktok, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_59d2jrb",   // <-- EmailJS Service ID
        "template_u7addr8",  // <-- EmailJS Template ID
        form.current,
        "g5cWdo8_nkxpl7S6L"    // <-- EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send ❌", error.text);
        }
      );
  };

  return (
    <div className={styles["contact-container"]}>
      <h1 className={styles["contact-header"]}>Contact</h1>

      {/* Email Info */}
      <div className={styles["email-card"]}>
        <FaEnvelope className={styles["icon"]} />
        <a href="mailto:abdulraqeebkumhar7000@gmail.com">
          abdulraqeebkumhar7000@gmail.com
        </a>
      </div>

      {/* Social Links */}
      <div className={styles["social-links"]}>
        <a href="https://www.tiktok.com/@abdulraqeebkumhar700" target="_blank" rel="noreferrer"><FaTiktok /></a>
        <a href="https://www.instagram.com/abdulraqeebkumhar/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/abdul-raqeeb-5908a931a/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/AbdulRaqeebgit" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className={styles["contact-form"]}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Write your message..." rows="5" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
