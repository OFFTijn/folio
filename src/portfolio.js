const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://OFFTijn.github.io/folio/',
  title: 'TM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tijn Mestrom',
  roles: ['Software Developer', 'UX-Designer', 'Student', 'Front-End Developer'],
  description:
    'Driven third-year HBO-ICT student with a strong passion for design and technology. Always seeking new challenges to develop and improve my skills, eager to contribute to innovative projects.',
  resume: '/folio/CV_TijnMestrom2025.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/tijn-mestrom-0a5953273/',
    github: 'https://github.com/OFFTijn',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Internship - UI/UX Design',
    timezone: '2024 - 2025',
    description:
      'During my internship i worked on visualising the customer, and creating designs user-focused. I optimized the user experience and improved the user interface.',
    stack: ['.net', 'RazorPages', 'Interviews'],
    livePreview: '/folio/Internship_report.pdf',
    image: '/folio/internship_cover.png',
    peopleCount: 1,
  },
  {
    name: 'DrinkSync',
    timezone: '2024',
    description:
      'DrinkSync is a mobile app that connects to a drink API, allowing users to manage their personal fridge stock. With DrinkSync, you can add, remove, and update drink items in your virtual fridge. It also helps keep track of stock levels.',
    stack: ['.net', 'C#', 'SQL'],
    livePreview: 'https://youtu.be/CglYyqnKf8E',
    peopleCount: 1,
  },
  {
    name: 'PartyPall',
    timezone: '2024',
    description:
      'PartyPall is a mobile application designed for event hosting, created for ZUYD. Users can scan QR codes to quickly create and manage events, invite friends, and track party details. It simplifies event planning by enabling easy access to event information and ensuring seamless coordination.',
    stack: ['.net', 'C#', 'SQL'],
    livePreview: 'https://youtu.be/Q3HMfJUzjZk',
    peopleCount: 4,
    
  },
  {
    name: 'Environmental awareness - UI/UX Design',
    timezone: '2024',
    description:
      'An educational application was developed for elementary school students to create environmental awareness. The app offers interactive games, quizzes and informative modules. An educational application was developed for elementary school students to create environmental awareness. The app offers interactive games, quizzes and informative modules.',
    stack: ['Figma', 'UX Testen', 'Persona creatie', 'User Journey Mapping'],
    livePreview: 'https://www.figma.com/proto/UAJULmR7WNkjQJNSd2zXhJ/HiFi-Greenwave?page-id=0%3A1&node-id=1210-71&p=f&viewport=647%2C646%2C0.13&t=v45FqcKzgl4x0n1B-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1210%3A71',
    peopleCount: 4,
  },
  {
    name: 'Mobile Feedback Application - UI Design',
    timezone: '2024',
    description:
      'The feedback application realized in C# is not user-friendly. Therefore, a Figma design was realized starting from a mobile feedback application, with emphasis on gamification. ',
    stack: ['Figma', 'High Fidelity Design'],
    livePreview: 'https://www.figma.com/proto/fcpuABH9fgFl2eMwWzfRDi/HiFi-Studenten-B1D-InfinIT?node-id=567-874&p=f&t=8Yl6ktg5b2s2hUbP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=567%3A874',
    peopleCount: 4,
  },
  {
    name: 'Feedback Application',
    timezone: '2024',
    description:
      'In the feedback application, I learned to work with a database and realized a simple application where data is created, deleted, viewed or updated.',
    stack: ['C#', '.Net', 'SQL'],
    sourceCode: 'https://github.com/OFFTijn/FeedBack-App',
    peopleCount: 4,
  },
  {
    name: 'Infrastructure',
    timezone: '2023',
    description:
      'Retrieve user stories and requirements from stakeholders and hereby build a working infrastructure, with html website in packettracer.',
    stack: ['Packet Tracer', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/OFFTijn/CoNextWebsite',
    peopleCount: 4,
  },
  {
    name: 'Lego Mindstorms',
    timezone: '2023',
    description:
      'From requirements elicitation to a final finished product with LegoMindstorms, watch the video for the end result!',
    stack: ['Python'],
    livePreview: 'https://www.youtube.com/watch?v=hzsYYeb7fao',
    peopleCount: 4,
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
  'Git',
  'CI/CD',
  'UI/UX Design',
  'Figma',
  'C#',
  'SQL',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tijnm06@gmail.com',
}

export { header, about, projects, skills, contact }
