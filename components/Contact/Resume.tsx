import React from 'react';

const Resume: React.FC = () => {
  return (
    <p style={{ marginBottom: 0 }}>
      See my full{' '}
      <a href="/resume.docx" download>
        Resume
      </a>
    </p>
  );
};

export default Resume;
