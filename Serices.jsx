import React from "react";
import "./Services.css"; // <-- Add this line

const Services = () => {
  const sectionStyle = {
    padding: "100px 20px",
    textAlign: "center",
    backgroundColor: "#3f1477",
  };

  const cardStyle = {
    border: "1px solid #1a4cd6ff",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    maxWidth: "200px",
    backgroundColor: "bleu",
  };

  const services = [
    "Web Design",
    "Graphics Design",
    "Social Media",
    "App Design",
    "Digital Marketing",
    "Content Writing",
  ];

  return (
    <section id="services" style={sectionStyle}>
      <h2 style={{ color: "white" }}>My Services</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {services.map((s, i) => (
          <div key={i} style={cardStyle}>
            <h3>{s}</h3>
            <p>High quality {s.toLowerCase()} for your business.</p>

            {/* Button added here */}
            <button className="service-button">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
