import React from "react";
import "../../style/StudentForm.css";

const StudentForm = () => {
  return (
    <div className="page-container">
      <form className="form-container">
        <h2 className="form-title">Student Registration</h2>

        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your last name"
        />

        <label htmlFor="profession">Profession</label>
        <input
          type="text"
          id="profession"
          name="profession"
          placeholder="Your profession"
        />

        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          name="summary"
          placeholder="Write a brief summary"
        ></textarea>

        <label htmlFor="language">Language</label>
        <input
          type="text"
          id="language"
          name="language"
          placeholder="Languages you know"
        />

        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          name="address"
          placeholder="Enter your address"
        ></textarea>

        <label htmlFor="hourlyRate">Hourly Rate</label>
        <input
          type="number"
          id="hourlyRate"
          name="hourlyRate"
          placeholder="Enter your hourly rate"
        />

        <label htmlFor="portfolioLink">Portfolio Link</label>
        <input
          type="url"
          id="portfolioLink"
          name="portfolioLink"
          placeholder="Provide a link to your portfolio"
        />

        <label htmlFor="skills">Skills</label>
        <input
          type="text"
          id="skills"
          name="skills"
          placeholder="List your skills"
        />

        <label htmlFor="certifications">Certifications</label>
        <textarea
          id="certifications"
          name="certifications"
          placeholder="List your certifications"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
