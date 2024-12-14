import React, { useState } from "react";
import "../../style/UserDashboard.css";
import { FaCog, FaUsers, FaBell, FaFolder, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserDashboard = () => {
  const [skillSearch, setSkillSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [countrySearch, setCountrySearch] = useState("");

  // Define filters and skills
  const filters = {
    projectTypes: ["Web Development", "Graphic Design", "Content Writing"],
    visibleSkills: ["React", "Node.js"],
    hiddenSkills: ["Python", "Django", "CSS"],
  };

  const allSkills = [...filters.visibleSkills, ...filters.hiddenSkills];
  const filteredSkills = allSkills.filter((skill) =>
    skill.toLowerCase().includes(skillSearch.toLowerCase())
  );

  const projects = [
    { id: 1, title: "Build a React App", description: "Need a responsive React app developed." },
    { id: 2, title: "Design a Logo", description: "Require a professional logo design." },
    { id: 3, title: "Write an Article", description: "Looking for a technical writer." },
  ];

  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <header className="header">
        <h1>Freelancer Clone</h1>
        <nav className="top-nav">
          <ul>
            <li className="nav-item">
              <FaCog />
            </li>
            <li className="nav-item">
              <FaUsers />
            </li>
            <li className="nav-item">
              <FaBell />
            </li>
            <li className="nav-item">
              <FaFolder />
            </li>
           <NavLink to="/login"><li className="nav-item">
              <FaEnvelope />            </li>
              </NavLink> 
            <li className="nav-item profile">Profile</li>
          </ul>
        </nav>
      </header>

      {/* Secondary Navigation Bar with Search Bar */}
      <nav className="secondary-nav">
        <div className="search-bar-container">
            <span className="browse-label">Browse</span>
            <input
                type="text"
                placeholder="Search for jobs or freelancers..."
                className="search-input"
            />
            <button className="search-button">Search</button>
        </div>
      </nav>

      <div className="content-container">
        {/* Filter Sidebar */}
        <aside className="sidebar">
          <h3>Filters</h3>

          <section>
            <h4>Project Type</h4>
            {filters.projectTypes.map((type) => (
              <div key={type}>
                <label>
                  <input type="checkbox" />
                  {type}
                </label>
              </div>
            ))}
          </section>

          <section>
            <h4>Skills</h4>
            <input
              type="text"
              placeholder="Search skills..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="search-input"
            />
            {filteredSkills.map((skill) => (
              <div key={skill}>
                <label>
                  <input type="checkbox" />
                  {skill}
                </label>
              </div>
            ))}
          </section>

          <section>
            <h4>Preferred Location</h4>
            <input
              type="text"
              placeholder="Search location..."
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
              className="search-input"
            />
          </section>

          <section>
            <h4>Client's Country</h4>
            <input
              type="text"
              placeholder="Search country..."
              value={countrySearch}
              onChange={(e) => setCountrySearch(e.target.value)}
              className="search-input"
            />
          </section>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <h2>Projects</h2>
          <section className="project-list">
            <ul>
              {projects.map((project) => (
                <li key={project.id} className="project-item">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
