import React, { useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../portfolio';
import Typed from 'typed.js';  // Import Typed.js
import './About.css';

const About = () => {
  const { name, roles, description, resume, social } = about;

  useEffect(() => {
    if (roles && roles.length > 0) {
      new Typed('.multiple-text', {
        strings: roles,  // Use the roles array from about object
        typeSpeed: 85,
        backSpeed: 85,
        backDelay: 1000,
        loop: true,
      });
    }
  }, [roles]);  // Depend on the roles, so it re-runs if roles change

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {/* Use a span to wrap the dynamic role that gets typed */}
      <h2 className='about__role'>
        And I'm a <span className='multiple-text'></span>.
      </h2>

      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target="_blank" rel="noreferrer">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
