module.exports = {
  siteTitle: 'Mudassir Ijaz Portfolio', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-resume/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Mudassir',
  lastName: 'Ijaz',
  joiningCompany: 'Google',
  currentCompany: 'kwanso',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/mudassirijaz786',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mudassirijaz786/',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/mudassirijaz786',
    },
    {
      icon: 'fa-facebook-f',
      name: 'Facebook',
      url: 'https://www.facebook.com/mudassirijaz786',
    },
  ],

  experience: [
    {
      title: 'Software Engineer',
      company: 'Kwanso',
      description: 'I am working as a software engineer at kwanso',
      from: 'Jan 2021',
      to: 'Present',
    },
    {
      title: 'Software Engineer',
      company: 'Systems Junction',
      description: `Worked at systems junction as a Software Engineer
      I Worked as a Software Engineer for Jordan based health care project using FHIR standard.
      By collaborating with the Django developer, made UI part of the Japanese project of a college.
      Identified many problems and solved them also worked on Canada, Australia based projects as a Software Engineer.
      Been complimented by my team lead and co-workers.
      Punctuality in time and work.
      Collaboration with clients, the discussion was made about better flow and mock ups.
      Received awards by delivering projects on time.`,
      from: 'Oct 2019',
      to: 'Jan 2021',
    },
    {
      title: 'Software Engineer',
      company: 'Netsol',
      description: `As an internee, my role was to develop an application using Reactjs.
      I learned how debugging is done and how a problem can be identified.
      Working with team members built a team player capabilities`,
      from: 'July 2019',
      to: 'Sept 2019',
    },
  ],
  education: [
    {
      degree: 'BSCS',
      school: 'Comsats University Islamabad, Lahore Campus',
      description: `Major Subjects: OOP, DSA, ML, Mathematics, Algorithms, AI, etc`,
      from: 'Sept 2016',
      to: 'Aug 2020',
      score: '3.23',
    },
    {
      degree: 'F.Sc',
      school: 'Punjab College, Muslim town Campus',
      description: `Major Subjects: Chemistry, Math, Physics, etc`,
      from: 'Sept 2014',
      to: 'Aug 2016',
      score: '919/1100',
    },
  ],
  skills: [
    'fab fa-html5',
    'fab fa-css3-alt',
    'fab fa-js-square',
    'fab fa-react',
    'fab fa-node-js',
    'fab fa-sass',
    'fab fa-npm',
    'fab fa-python',
    'fas fa-gem',
    'fas fa-database',
  ],
  workflows: [
    'Mobile-First, Responsive Design',
    ' Cross Browser Testing, Debugging',
    'Cross Functional Teams',
    'Agile Development, Scrum',
  ],
  email: 'ijazmudassir786@gmail.com',
  phone: '+923314068055',
  address: 'Shahdara, Lahore, Pakistan',
};
