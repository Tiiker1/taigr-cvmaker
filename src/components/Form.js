// src/components/Form.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 20px;
  background: #333;
  color: #fff;
  border-radius: 8px;
  margin: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  width: 100%;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  background: #444;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const SkillTag = styled.div`
  background: #555;
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 5px;
  display: flex;
  align-items: center;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  margin-left: 5px;
  cursor: pointer;
`;

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: [],
    skills: [],
    experience: '',
    picture: ''
  });

  const [skillInput, setSkillInput] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'picture') {
      setFormData({ ...formData, [name]: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addEducation = () => {
    setFormData({ ...formData, education: [...formData.education, ''] });
  };

  const removeEducation = (index) => {
    const newEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEducation });
  };

  const handleEducationChange = (index, value) => {
    const newEducation = formData.education.map((edu, i) => (i === index ? value : edu));
    setFormData({ ...formData, education: newEducation });
  };

  const addSkill = () => {
    if (skillInput && !formData.skills.includes(skillInput)) {
      setFormData({ ...formData, skills: [...formData.skills, skillInput] });
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData({ ...formData, skills: formData.skills.filter(skill => skill !== skillToRemove) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <Input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
        <Input type="file" name="picture" onChange={handleChange} required />
        <Button type="button" onClick={addEducation}>Add Education</Button>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <Input type="text" value={edu} onChange={(e) => handleEducationChange(index, e.target.value)} placeholder="Education" />
            <Button type="button" onClick={() => removeEducation(index)}>Remove</Button>
          </div>
        ))}
        <Input
          type="text"
          placeholder="Add a skill"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
        />
        <Button type="button" onClick={addSkill}>Add Skill</Button>
        <SkillsContainer>
          {formData.skills.map((skill, index) => (
            <SkillTag key={index}>
              {skill}
              <RemoveButton onClick={() => removeSkill(skill)}>&times;</RemoveButton>
            </SkillTag>
          ))}
        </SkillsContainer>
        <TextArea name="experience" placeholder="Experience" onChange={handleChange}></TextArea>
        <Button type="submit">Generate CV</Button>
      </form>
    </FormContainer>
  );
};

export default Form;