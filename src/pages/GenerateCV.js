import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import DisplayCV from '../components/DisplayCV';

const GenerateCV = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: [{ school: '', degree: '', field: '', startDate: '', endDate: '' }],
    experience: '',
    skills: ['']
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const componentRef = useRef();

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name.startsWith('education')) {
      const updatedEducation = [...formData.education];
      updatedEducation[index][name.split('.')[1]] = value;
      setFormData({
        ...formData,
        education: updatedEducation
      });
    } else if (name.startsWith('skills')) {
      const updatedSkills = [...formData.skills];
      updatedSkills[index] = value;
      setFormData({
        ...formData,
        skills: updatedSkills
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { school: '', degree: '', field: '', startDate: '', endDate: '' }]
    });
  };

  const handleDeleteEducation = (index) => {
    const updatedEducation = [...formData.education];
    updatedEducation.splice(index, 1); // Remove the education entry at index
    setFormData({
      ...formData,
      education: updatedEducation,
    });
  };

  const handleAddSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, '']
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="generate-cv">
      <h1>Generate Your CV</h1>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          
          
          {formData.education.map((edu, index) => (
        <div key={index} className="education-section">
          <h3>Education {index + 1}</h3>
          <button type="button" className="btn" onClick={() => handleDeleteEducation (index)}>Delete</button>
          {/* Input fields for education */}
              <input
                type="text"
                name={`education.school`}
                placeholder="School"
                value={edu.school}
                onChange={(e) => handleChange(e, index)}
                required
              />
              <input
                type="text"
                name={`education.degree`}
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleChange(e, index)}
                required
              />
              <input
                type="text"
                name={`education.field`}
                placeholder="Field of Study"
                value={edu.field}
                onChange={(e) => handleChange(e, index)}
                required
              />
              <input
                type="date"
                name={`education.startDate`}
                placeholder="Start Date"
                value={edu.startDate}
                onChange={(e) => handleChange(e, index)}
                required
              />
              <input
                type="date"
                name={`education.endDate`}
                placeholder="End Date"
                value={edu.endDate}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </div>
          ))}
          <button type="button" className="btn" onClick={handleAddEducation}>Add Education</button>

          <div className="skills-section">
            <h3>Skills</h3>
            {formData.skills.map((skill, index) => (
              <input
                key={index}
                type="text"
                name={`skills`}
                placeholder="Skill"
                value={skill}
                onChange={(e) => handleChange(e, index)}
                required
              />
            ))}
            <button type="button" className="btn" onClick={handleAddSkill}>Add Skill</button>
          </div>
          
          <textarea name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
          
          <button type="submit" className="btn">Generate CV</button>
        </form>
      ) : (
        <div>
          <DisplayCV ref={componentRef} formData={formData} />
          <button onClick={handlePrint} className="btn">Download PDF</button>
        </div>
      )}
    </div>
  );
};


export default GenerateCV;