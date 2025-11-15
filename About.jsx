

/*import React from "react";
import image from "./assets/image.png";

const skills = ["Java", "CSS", "React", "JavaScript", "HTML"];
const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "90+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
];

const About = () => {
  return (
    <section id="about" style={{ padding: "100px 20px", textAlign: "center" }}>
      <h2>About Me</h2>

      <img
        src={image}
        alt="image"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          margin: "20px auto",
        }}
      />

      <p>
        J'ai commencé ma carrière dans le développement web il y a plus de 10 ans,
          en apprenant d'abord HTML, CSS et JavaScript. Au fil des années, j'ai
          perfectionné mes compétences en React et d'autres technologies modernes,
          en travaillant sur divers projets professionnels et personnels.
          J'aime créer des applications web interactives et fonctionnelles.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        {stats.map((stat, index) => (
          <div key={index}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "60px" }}>
        <h3>My Skills</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", marginTop: "20px" }}>
          {skills.map((skill, index) => (
            <span
              key={index}
              style={{
                padding: "10px 15px",
                border: "1px solid #333",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "60px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto", textAlign: "justify" }}>
        <h3>Mon Parcours Personnel</h3>
        <p>
          J'ai commencé ma carrière dans le développement web il y a plus de 10 ans,
          en apprenant d'abord HTML, CSS et JavaScript. Au fil des années, j'ai
          perfectionné mes compétences en React et d'autres technologies modernes,
          en travaillant sur divers projets professionnels et personnels.
        </p>
      </div>
    </section>
  );
};

export default About;*/




import React from "react";
import image from "./assets/image.png";
import "./About.css"; // import the CSS

const skills = ["Html", "CSS", "React", "JavaScript", "Java"];
const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "3+", label: "Happy Clients" },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <img src={image} alt="Profile" className="profile-image" />

        <p>
            I have extensive experience in <strong>HTML</strong> and <strong>CSS</strong>, building clean, semantic, and responsive web layouts that work seamlessly across devices.  
              With <strong>JavaScript</strong>, I create dynamic, interactive web applications that deliver a smooth user experience.  
              My expertise in <strong>React</strong> allows me to develop modern, component-based applications with maintainable code and efficient state management.  
               Additionally, I have knowledge of design principles, version control with Git, and a strong understanding of accessibility and web performance best practices.
        </p>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="skills-section">
        <h3>My Skills</h3>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>

      <div className="personal-journey">
        <h3>Mon Parcours Personnel</h3>
        <p>
            I started my career in web development over 2 years ago, learning the fundamentals of HTML, CSS, and JavaScript. 
            Over the years, I have honed my skills in React and explored other modern technologies, including advanced JavaScript frameworks and state management tools.
             I have worked on a variety of projects, ranging from interactive websites to complex web applications, for both professional clients and personal projects.
             This experience has allowed me to develop strong expertise in building intuitive, high-performance, and accessible user interfaces, while continuously staying 
              up-to-date with the latest innovations and best practices in web development.
        </p>
      </div>

<a href="#contact" className="connect-button">
  Connect with me
</a>    </section>
  );
};

export default About;
