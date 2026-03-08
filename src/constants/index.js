import {
  mobile,
  backend,
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
  docker,
  ba,
  tsg,
  devlabs,
  delet,
  yovivoLogo,
  nestjs,
  expo,
  yovivo,
  delet_admin,
  arturo,
  ApiDoc,
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
      { name: "HTML 5", icon: html },
      { name: "CSS 3", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "React JS", icon: reactjs },
      { name: "Redux Toolkit", icon: redux },
      { name: "Tailwind CSS", icon: tailwind },
    ],
  },
  {
    title: "Back-end",
    icon: backend,
    technologies: [
      { name: "Node JS", icon: nodejs },
      { name: "NestJS", icon: nestjs },
      { name: "MongoDB", icon: mongodb },
      { name: "Git", icon: git },
      { name: "Docker", icon: docker },
    ],
  },
  {
    title: "Mobile",
    icon: mobile,
    technologies: [
      { name: "React Native", icon: reactjs },
      { name: "Expo", icon: expo },
    ],
  },
];

const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "Delet",
    icon: delet,
    link: "https://www.linkedin.com/company/delet/",
    iconBg: "#E6DEDD",
    date: "March 2024 - Present",
    points: [
      "Built and maintained enterprise web applications using React and Express.js, managing AWS infrastructure including Cognito authentication, S3 storage, and EC2 deployments.",
      "Integrated multiple third-party services including August, Textgrid, and Zillow APIs to expand application functionality.",
      "Designed and implemented normalized database structures to optimize data management and application performance.",
      "Set up CI/CD pipelines through Bitbucket and handled project tracking with Jira to deliver projects efficiently.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "DevLabs",
    icon: devlabs,
    link: "https://www.linkedin.com/company/devlabshq/",
    iconBg: "#E6DEDD",
    date: "February 2022 - February 2023",
    points: [
      "Built interactive and well-documented web applications using modern JavaScript frameworks such as Next.js with TypeScript.",
      "Developed scalable backend services using Express.js and Node.js, contributing to robust and reliable web application functionality.",
      "Participated in Agile Scrum ceremonies, aiding in sprint planning, daily stand-ups, sprint reviews, and retrospectives.",
    ],
  },
  {
    title: "Full-stack Junior Developer",
    company_name: "TSG Proadvisor",
    icon: tsg,
    link: "https://tsgproadvisorlatino.talentlms.com/",
    iconBg: "#E6DEDD",
    date: "January 2021 - February 2022",
    points: [
      "Harnessed React and Next.js frameworks to build dynamic and responsive applications tailored to client specifications.",
      "Pioneered the integration of back-end and front-end components, leading to a 30% improvement in site performance and load times.",
    ],
  },
  {
    title: "Functional Analyst",
    company_name: "Buenos Aires City Government",
    icon: ba,
    link: "https://www.linkedin.com/company/aborea/",
    iconBg: "#E6DEDD",
    date: "January 2020 - December 2020",
    points: [
      "Conducted comprehensive analysis of business processes to identify opportunities for improvement, leveraging IT solutions to optimize and streamline those processes.",
    ],
  },
];

const projects = [
  {
    name: "Delet Admin",
    description:
      "Enterprise admin dashboard for property management with AWS-backed authentication, third-party API integrations, and real-time data management.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "AWS", color: "pink-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
    ],
    image: delet_admin,
    source_code_link: "",
    website_link: "https://admin.delet.com",
    logo: delet,
  },
  {
    name: "Yovivo",
    description:
      "Property rent web application focused on general rent and extended stays for digital nomads.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Laravel", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
    ],
    image: yovivo,
    source_code_link: "https://github.com/Oscar-Espinoza/Property-rent-management/tree/main/client",
    website_link: "https://rent-dashboard.netlify.app/",
    logo: yovivoLogo,
  },
  {
    name: "Arturo MichAIlena",
    description:
      "AI image generation app powered by OpenAI's DALL-E API with community showcase.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "OpenAI API", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
    ],
    image: arturo_img,
    source_code_link: "https://github.com/Oscar-Espinoza/AI-Image-Generation-App",
    website_link: "https://arturo-michailena.netlify.app/",
    logo: arturo,
  },
  {
    name: "Yariga REST API Docs",
    description:
      "Visual API documentation for the Yariga property platform built with Swagger.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Swagger", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Express.js", color: "blue-text-gradient" },
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
    aboutMe: "Full Stack Developer at Delet with 4+ years of experience building enterprise web applications. I work across the stack with React, Next.js, Node.js, and AWS, and have delivered projects for clients including TSG Proadvisor and Buenos Aires City Government. I combine technical proficiency with solid problem-solving skills to tackle complex projects efficiently.",
  },
  services: [
    { title: "Front-end Developer", icon: web },
    { title: "Back-end Developer", icon: backend },
    { title: "Mobile Developer", icon: mobile },
  ],
};

export { services, experiences, projects, data };
