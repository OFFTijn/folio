const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://offtijn.github.io/Portfolio/',
  title: 'TM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tijn Mestrom',
  roles: ['Software Developer', 'UX-Designer', 'Student', 'Front-End Developer'],
  description:
    'Driven third-year HBO-ICT student with a strong passion for design and technology. Always seeking new challenges to develop and improve my skills, eager to contribute to innovative projects.',
  resume: '/CV_TijnMestrom2025.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/tijn-mestrom-0a5953273/',
    github: 'https://github.com/OFFTijn',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tijnm06@gmail.com',
}

export { header, about, projects, skills, contact }
