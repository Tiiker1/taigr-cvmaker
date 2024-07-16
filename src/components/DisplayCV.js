import React from 'react';

const DisplayCV = React.forwardRef(({ formData }, ref) => {
  return (
    <div ref={ref} className="cv">
      <header className="cv-header">
        <h1 className="cv-name">{formData.name}</h1>
        <div className="cv-contact">
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
        </div>
      </header>
      <section className="cv-section">
        <h2>Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index} className="cv-education-item">
            <h3>{edu.school}</h3>
            <p><strong>Degree:</strong> {edu.degree}</p>
            <p><strong>Field of Study:</strong> {edu.field}</p>
            <p><strong>Duration:</strong> {edu.startDate} - {edu.endDate}</p>
          </div>
        ))}
      </section>
      <section className="cv-section">
        <h2>Experience</h2>
        <p>{formData.experience}</p>
      </section>
      <section className="cv-section">
        <h2>Skills</h2>
        <div className="cv-skills">
          {formData.skills.map((skill, index) => (
            <span key={index} className="cv-skill">{skill}</span>
          ))}
        </div>
      </section>
    </div>
  );
});

export default DisplayCV;