import React from 'react';
import Project from './Project';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        <Project title="Project 1" imageUrl="/path/to/image.jpg" deployLink="https://example.com" repoLink="https://github.com/repo" />
        <Project title="Project 2" imageUrl="/path/to/image.jpg" deployLink="https://example.com" repoLink="https://github.com/repo" />
        {/* Add more Project components as needed */}
      </div>
    </section>
  );
};

export default Portfolio;
