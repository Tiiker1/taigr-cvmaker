// src/components/CV.js
import React from 'react';
import styled from 'styled-components';

const A4Container = styled.div`
  width: 210mm;
  min-height: 297mm;
  padding: 20mm;
  margin: 10mm auto;
  background: #fff;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const Picture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: block;
  margin: 0 auto 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  border-bottom: 2px solid #444;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  background: #555;
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 5px;
`;

const CV = ({ cvData }) => {
  const { name, email, phone, education, skills, experience, picture } = cvData;

  return (
    <A4Container>
      {picture && <Picture src={picture} alt="Profile" />}
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{phone}</p>
      {education.length > 0 && (
        <Section>
          <SectionTitle>Education</SectionTitle>
          <ul>
            {education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </Section>
      )}
      {skills.length > 0 && (
        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsList>
            {skills.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillsList>
        </Section>
      )}
      {experience && (
        <Section>
          <SectionTitle>Experience</SectionTitle>
          <p>{experience}</p>
        </Section>
      )}
    </A4Container>
  );
};

export default CV;