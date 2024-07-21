import React from 'react';

const Project = ({ title, imageUrl, deployLink, repoLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <div>
        <a href={deployLink}>Deployed Application</a>
        <a href={repoLink}>GitHub Repository</a>
      </div>
    </div>
  );
};

export default Project;
