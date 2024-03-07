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
  yovivoLogo,
  carrent,
  jobit,
  threejs,
  axios,
  laravel,
  nestjs,
  documentation,
  expo,
  lab,
  onlineplatform,
  onlinetutorials,
  pairprogramming,
  reactnavigation,
  stackoverflow,
  letMeRent,
  yovivo,
  arturo,
  ApiDoc,
  letMeRent_img,
  arturo_img,
  swagger_img,
} from "../assets";

export const navLinks = [
  {
    id: "welcome",
    title: "Welcome",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "Tech Stack",
    title: "Tech Stack",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end",
    icon: web,
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
        name: "Three JS",
        icon: threejs,
      },
      {
        name: "Figma",
        icon: figma,
      },
    ],
  },
  {
    title: "Back-end",
    icon: backend,
    technologies: [
      {
        name: "Node JS",
        icon: nodejs,
      },
      {
        name: 'Nestjs',
        icon: nestjs,
      },
      {
        name: 'Laravel',
        icon: laravel,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "git",
        icon: git,
      },
      {
        name: "docker",
        icon: docker,
      },
      
    ]
  },
  {
    title: "React Native",
    icon: mobile,
    technologies: [
      {
        name: "React Native",
        icon: reactjs,
      },
      {
        name: "Expo",
        icon: expo,
      },
      {
        name: "React Navigation",
        icon: reactnavigation,
      },
      {
        name: "Redux",
        icon: redux,
      },
      {
        name: "Axios",
        icon: axios,
      },
    ]
  },
  {
    title: "Tools",
    icon: creator,
    technologies: [
      {
        name: "Git",
        icon: git,
      },
      {
        name: "Stack Overflow",
        icon: stackoverflow,
      },
      {
        name: "Online documentation",
        icon: documentation,
      },
      {
        name: "Online coding platforms",
        icon: onlineplatform,
      },
      {
        name: "Online tutorials",
        icon: onlinetutorials,
      },
      {
        name: "Pair programming",
        icon: pairprogramming,
      },
      {
        name: "Personal projects",
        icon: lab,
      },
    ]
  }
];


const experiences = [
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
  {
    title: "Remote - Full-stack Junior developer",
    company_name: "TSG Proadvisor",
    icon: tsg,
    link: "https://tsgproadvisorlatino.talentlms.com/",
    iconBg: "#E6DEDD",
    date: "May 2021 - May 2022",
    points: [
      "Expertly harnessed the capabilities of React and Next.js frameworks to build dynamic and responsive applications tailored to client specifications.",
      "Pioneered the integration of back-end and front-end components, leading to a 30% improvement in site performance and load times.",
    ],
  },
];

const projects = [
  {
    name: "Yovivo",
    description:
      "Property rent web application focused on general rent and extended stays for digital nomads",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: yovivo,
    source_code_link: "https://github.com/Oscar-Espinoza/Property-rent-management/tree/main/client",
    website_link: "https://rent-dashboard.netlify.app/",
    logo: yovivoLogo,
  },
  {
    name: "LetMeRent",
    description:
      "Property rent app where you can publish your properties",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
    ],
    image: letMeRent_img,
    source_code_link: "https://github.com/Oscar-Espinoza/Property-rent-management/tree/main/client",
    website_link: "https://rent-dashboard.netlify.app/",
    logo: letMeRent,
  },
  {
    name: "Arturo MichAIlena",
    description:
      "Generate images from prompts",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI api",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
    ],
    image: arturo_img,
    source_code_link: "https://github.com/Oscar-Espinoza/AI-Image-Generation-App",
    website_link: "https://arturo-michailena.netlify.app/",
    logo: arturo,
  },
  {
    name: "API REST documentation for Yariga",
    description:
      "Visual documentation from the Yariga API made with Swagger",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Swagger",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
    ],
    image: ApiDoc,
    source_code_link: "https://github.com/Oscar-Espinoza/Property-rent-management/tree/main/server",
    website_link: "https://nice-gold-ant-gear.cyclic.app/docs/",
    logo: swagger_img,
  },
];

const data = {
  experiences,
  projects,
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

export { services, experiences, projects, data };

