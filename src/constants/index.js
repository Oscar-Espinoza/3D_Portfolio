import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ba,
  rm,
  tsg,
  devlabs,
  carrent,
  jobit,
  threejs,
  letMeRent,
  arturo,
  myLogo,
  letMeRent_img,
  portfolio_img,
  arturo_img,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Back-end",
    icon: backend,
    technologies: [
      {
        name: "Node JS",
        icon: "nodejs",
      },
      {
        name: "MongoDB",
        icon: "mongodb",
      },
      {
        name: "git",
        icon: "git",
      },
      {
        name: "docker",
        icon: "docker",
      },
      
    ]
  },
  {
    title: "Front-end",
    icon: web,
    technologies: [
      {
        name: "HTML 5",
        icon: "html",
      },
      {
        name: "CSS 3",
        icon: "css",
      },
      {
        name: "JavaScript",
        icon: "javascript",
      },
      {
        name: "TypeScript",
        icon: "typescript",
      },
      {
        name: "React JS",
        icon: "reactjs",
      },
      {
        name: "Redux Toolkit",
        icon: "redux",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwind",
      },
      {
        name: "Three JS",
        icon: "threejs",
      },
      {
        name: "figma",
        icon: "figma",
      },
    ],
  },
  {
    title: 'All',
    icon: null,
    technologies: []
  },
  {
    title: "React Native",
    icon: mobile,
    technologies: [
      {
        name: "React Native",
        icon: "reactjs",
      },
      {
        name: "Expo",
        icon: "expo",
      },
      {
        name: "React Navigation",
        icon: "reactnavigation",
      },
      {
        name: "Redux",
        icon: "redux",
      },
      {
        name: "Axios",
        icon: "axios",
      },
    ]
  },
  {
    title: "Self-taught",
    icon: creator,
    technologies: [
      {
        name: "Git",
        icon: "git",
      },
      {
        name: "Stack Overflow",
        icon: "stackoverflow",
      },
      {
        name: "Online documentation",
        icon: "documentation",
      },
      {
        name: "Online coding platforms",
        icon: "onlineplatform",
      },
      {
        name: "Online tutorials",
        icon: "onlinetutorials",
      },
      {
        name: "Pair programming",
        icon: "pairprogramming",
      },
      {
        name: "Personal projects",
        icon: "lab",
      },
    ]
  }
];


const experiences = [
  {
    title: "Functional System Analyst",
    company_name: "Buenos Aires City Government",
    icon: ba,
    link: "https://www.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires/",
    iconBg: "#E6DEDD",
    date: "Jul 2018 - Jan 2020",
    points: [
      "Carried out extensive business processes analysis, identifying areas for improvement and leveraging IT to optimize those procedures.",
      "Partnered with diverse teams to capture and document business requirements, subsequently translating them into actionable technical specifications for system enhancements.",
      "Facilitated training and support for end-users to ensure smooth adoption and application of new technologies and systems.",
      "Showcased strong communication abilities, effectively explaining technical concepts to non-technical users, and fostering solid relationships with team members and clients.",
    ],
  },
  {
    title: "Remote - Order fulfillment specialist",
    company_name: "Rehabmart.com",
    icon: rm,
    link: "https://www.linkedin.com/company/rehabmart-llc/",
    iconBg: "#E6DEDD",
    date: "Jan 2020 - May 2021",
    points: [
      "Improved operational efficiency by conducting data analysis and reporting to monitor and enhance order fulfillment processes.",
      "Collaborated with cross-functional teams, demonstrating effective communication and teamwork skills.",
      "Showcased strong problem-solving skills through the identification and implementation of effective solutions for process improvement.",
      "Demonstrated proficiency in using order management software and tools, including their own management software.",
    ],
  },
  {
    title: "Remote Technical Support Specialist",
    company_name: "TSG Proadvisor",
    icon: tsg,
    link: "https://tsgproadvisorlatino.talentlms.com/",
    iconBg: "#E6DEDD",
    date: "May 2021 - May 2022",
    points: [
      "Provided technical support, gaining extensive experience in problem-solving and client communication.",
      "Collaborated with cross-functional teams to gather and document technical requirements, gaining experience in requirements gathering and analysis.",
      "Conducted remote troubleshooting, demonstrating strong technical understanding and ability to work under pressure.",
      "Maintained detailed technical support records, showing attention to detail and organizational skills.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "DevLabs",
    icon: devlabs,
    link: "https://www.linkedin.com/company/devlabshq/",
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Played a significant role in the creation of interactive, dynamic web applications employing cutting-edge JavaScript frameworks.",
      "Orchestrated the development of scalable backend services with Express.js and Node.js, enhancing the robust functionality of our web applications.",
      "Frequently crafted mobile interfaces and features using React-Native, ensuring a consistent user experience across various platforms.",
      "Actively engaged in Agile Scrum practices, contributing to sprint planning, daily stand-ups, sprint reviews, and retrospectives, effectively managing project progress.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Oscar proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Oscar does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Oscar optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "LetMeRent",
    description:
      "Web-based platform that simplifies the rental process for users seeking properties by allowing them to easily search, book, and manage rentals from various providers. With our app, users can find the perfect property to suit their needs and manage all aspects of the rental process in one convenient location. Whether you're a renter or a property owner, our app provides an efficient and seamless solution for all your rental needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: letMeRent_img,
    source_code_link: "https://github.com/",
    website_link: "https://rent-dashboard.netlify.app/",
    logo: letMeRent,
  },
  {
    name: "Arturo MichAIlena",
    description:
      "AI art web app, inspired by DALL·E, leverages the power of artificial intelligence to transform written prompts into stunning, high-quality images. With the ability to also modify uploaded images, our app empowers users to bring their ideas to life in entirely new ways. Experience the cutting-edge technology of AI art with our app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI api",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: arturo_img,
    source_code_link: "https://github.com/",
    website_link: "https://arturo-michailena.netlify.app/",
    logo: arturo,
  },
  {
    name: "3D Porfolio website",
    description:
      "Welcome to my portfolio website! This platform showcases my skills, experience, and accomplishments, offering potential clients and employers a comprehensive view of my work. With a clean and modern design, my website highlights my expertise in [insert your field or specialty] and features examples of my best work. Whether you're a recruiter, a potential client, or just browsing, my website is the perfect place to get to know me and my professional abilities.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio_img,
    source_code_link: "https://github.com/Oscar-Espinoza/Portfolio-page",
    website_link: "https://oscar-espinoza.netlify.app/",
    logo: myLogo,
  },
];

const data = {
  experiences,
  projects,
  technologies: [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ],
  aboutMe: {
    title: "Hi, I'm Oscar",
    subtitle: "Full-stack web and mobile software developer",
    aboutMe: "Oscar Espinoza here, a Full Stack Developer with a focus on delivering reliable technology solutions. My skill set covers a range of front-end and back-end technologies. Combining technical proficiency with solid problem-solving and communication skills, I am prepared to tackle complex projects with efficiency and professionalism."
      },
  services: [
    {
      title: "Back-end Developer",
      icon: backend,
    },
    {
      title: "Front-end Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Self-taught",
      icon: creator,
    },
  ]
};

export { services, experiences, testimonials, projects, data };

