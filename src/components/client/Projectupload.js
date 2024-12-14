import React, { useState } from "react";
import "../../style/ProjectUpload.css";

function ProjectUpload() {
  const [file, setFile] = useState(null);
  const [projectType, setProjectType] = useState("");
  const [description, setDescription] = useState("");
  const [relatedTo, setRelatedTo] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ file, projectType, description, relatedTo });
  };

  return (
    <div className="upload-container">
      <h2>Upload Your Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Project Type:</label>
          <input
            type="text"
            placeholder="Enter project type"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Description:</label>
          <textarea
            placeholder="Describe your project"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>What is it related to:</label>
          <input
            type="text"
            placeholder="Project's related field"
            value={relatedTo}
            onChange={(e) => setRelatedTo(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Upload Project File:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit" className="btn-upload">Upload Project</button>
      </form>
    </div>
  );
}

export default ProjectUpload;
