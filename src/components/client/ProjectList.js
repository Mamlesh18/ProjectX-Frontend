import React from "react";
import "../../style/ProjectList.css";

function ProjectList() {
  const projects = [
    { type: "Web Development", description: "A portfolio website", relatedTo: "Frontend" },
    { type: "Mobile App", description: "An Android app for fitness", relatedTo: "Android Development" },
    // Add more projects as needed
  ];

  return (
    <div className="project-list-container">
      <h2>Our Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h4>{project.type}</h4>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Related to:</strong> {project.relatedTo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
