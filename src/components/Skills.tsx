import React from "react";
import '../app/styles/skills.css'; //import custom css file

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
        <div className="skills-grid">
            {/* First Column: Heading and paragraph */}
            <div data-aos="zoom-in-up" className="skills-left">
                <h2 className="skills-heading">FINTech Experties</h2>
                <p className="skills-text">
                One of the most important fintech skills for executive management is the ability to 
                craft and execute a fintech strategy that aligns with the organization's vision, mission, 
                and goals. A fintech strategy should address how the organization will leverage fintech 
                solutions to create value for its customers, employees, partners, and stakeholders. 
                It should also consider the external factors that affect the fintech landscape, 
                such as regulations, competitors, customer preferences, and technological trends. 
                Executive managers need to have a clear understanding of the fintech ecosystem, 
                the opportunities and threats it poses, and the best practices and frameworks to guide their
                decision-making.
                </p>
            </div>

            {/* Second Column Skills */}
        
                <div className="skills-right">
                <div className="skills-icon-grid">
                <div className="skills-space">
                <h2 data-aos="flip-left">Typescript</h2>
                <h2 data-aos="flip-left">React.js</h2>
                <h2 data-aos="flip-left">Next.js</h2>
                </div>             
                <div className="skills-space">
                <h2 data-aos="flip-left">Tailwind</h2>
                <h2 data-aos="flip-left">CSS</h2>
                <h2 data-aos="flip-left">Node.js</h2>
                </div>
                </div>
                </div>
                </div>
            </div>
  );
};

export default Skills;