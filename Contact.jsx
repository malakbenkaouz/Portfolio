
import React from "react";

const Contact = () => {
  const sectionStyle = {
    
    padding: "100px 20px",
    textAlign: "center",
    backgroundColor: "#3f1477",
    color: "white",
  };

  const buttonStyle = {

    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const inputStyle = {
    padding: "10px",
    margin: "5px",
    width: "250px",
  };

  return (
    <section id="contact" style={sectionStyle}>
      <h2>Contact Me</h2>
      <p>Email: malakbnkaouz@gmail.com</p>
      <p>Phone: +212-710711862</p>
      <p>Location: Casablanc, Morocco </p>
      <form style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input type="text" placeholder="Your Name" style={inputStyle} />
        <input type="email" placeholder="Your Email" style={inputStyle} />
        <textarea placeholder="Your Message" rows="4" style={inputStyle}></textarea>
        <button style={buttonStyle}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
