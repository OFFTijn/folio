import React, { useState } from 'react';
import uniqid from 'uniqid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import PersonIcon from '@mui/icons-material/Person';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggle card flip
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`project ${isFlipped ? 'flipped' : ''}`} onClick={toggleFlip}>
      {/* Front of the card */}
      <div className="project__front">
        <h3 className="project__name">{project.name}</h3>
        {project.image ? (
          <img src={project.image} alt={project.name} className="project__image" />
        ) : null}
      </div>

      {/* Back of the card */}
      <div className="project__back">
        <h3 className="project__back-title">{project.name}</h3>
        {project.timezone && (
          <p className="project__timezone">{project.timezone}</p>
        )}

        {project.peopleCount && (
          <div className="project__people">
            <PersonIcon />
            <span className="project__people-count">{project.peopleCount}</span>
          </div>
        )}

        <p className="project__description">{project.description}</p>

        {project.stack && (
          <ul className="project__stack">
            {project.stack.map((item) => (
              <li key={uniqid()} className="project__stack-item">
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="project__links">
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              aria-label="source code"
              className="link link--icon"
            >
              <GitHubIcon />
            </a>
          )}

          {project.livePreview && (
            <a
              href={project.livePreview}
              aria-label="live preview"
              className="link link--icon"
            >
              <LaunchIcon />
            </a>
          )}

          {project.livePreview2 && (
            <a
              href={project.livePreview2}
              aria-label="live preview"
              className="link link--icon"
            >
              <LaunchIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
