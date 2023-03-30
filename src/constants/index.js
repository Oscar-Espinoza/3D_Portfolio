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
];

const technologies = [
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
];

const experiences = [
  {
    title: "IT Technician",
    company_name: "Tecnialiado",
    iconBg: "#383E56",
    date: "Feb 2015 - April 2018",
    points: [
      "Successfully provided onsite technical support to key clients in hospitals and businesses, resulting in improved client satisfaction and retention rates.",
      "Demonstrated proficiency in repairing desktop PCs and notebooks, including hardware and software troubleshooting, and implementing solutions to prevent recurring issues.",
      "Managed and resolved technical issues for a diverse range of clients, including Windows and Mac users, with a focus on minimizing downtime and ensuring optimal system performance.",
      "Trained and mentored junior technicians, improving their technical skills and contributing to the overall success of the team.",
    ],
  },
  {
    title: "Technical support specialist",
    company_name: "Buenos Aires City Government",
    icon: ba,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - jul 2019",
    points: [
      "Provided technical support and expertise to various departments of the undersecretary, ensuring seamless operations and minimizing downtime.",
      "Developed and maintained strong relationships with internal clients, providing excellent customer service and communication throughout the support process.",
      "Conducted regular system updates and maintenance to ensure optimal performance and reliability of equipment, reducing system failures and downtime.",
      "Researched and recommended new technologies and solutions to improve system performance and efficiency, and reduce maintenance costs.",
    ],
  },
  {
    title: "Functional System Analyst",
    company_name: "Buenos Aires City Government",
    icon: ba,
    iconBg: "#E6DEDD",
    date: "Jul 2019 - Dec 2020",
    points: [
      "Conducted comprehensive analysis of business processes to identify opportunities for improvement, leveraging IT solutions to optimize and streamline those processes.",
      "Collaborated with cross-functional teams to gather and document business requirements, translating them into technical specifications for system enhancements.",
      "Provided training and support to end-users, ensuring successful adoption and use of new technologies and systems.",
      "Demonstrated excellent communication skills, clearly explaining technical issues to non-technical users, and building strong relationships with team members and clients.",
    ],
  },
  {
    title: "Remote - Order fulfillment specialist",
    company_name: "Rehabmart.com",
    icon: rm,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - May 2022",
    points: [
      "Maintained a high level of accuracy and efficiency in processing 300+ POs per day, contributing to the company's overall success and achieving its goals and objectives.",
      "Conducted regular data analysis and reporting to monitor and improve order fulfillment processes, identifying areas for improvement and implementing effective solutions.",
      "Collaborated with cross-functional teams, including customer service, inventory management, and shipping, to ensure smooth and efficient order fulfillment processes.",
      "Demonstrated proficiency in using a variety of order management software and tools, including their own management software.",
    ],
  },
  {
    title: "Remote Technical Support Specialist",
    company_name: "TSG Proadvisor",
    icon: tsg,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Provided expert technical support to clients of TSG Proadvisor, a leading provider of tax preparation software.",
      "Collaborated with cross-functional teams to gather and document technical requirements for software enhancements and upgrades.",
      "Demonstrated excellent communication skills, clearly explaining technical issues to non-technical users, and building strong relationships with team members and clients.",
      "Conducted remote troubleshooting and problem resolution for clients, using a variety of remote access tools and technologies to ensure quick and efficient resolution of technical issues.",
      "Maintained accurate and detailed technical support records, providing valuable insights and recommendations for improving technical support processes and customer satisfaction.",
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
    source_code_link: "https://github.com/",
    website_link: "https://rent-dashboard.netlify.app/",
    logo: myLogo,
  },
];

const data = {
  experiences: [
    {
      title: "Functional System Analyst",
      company_name: "Buenos Aires City Government",
      icon: ba,
      iconBg: "#E6DEDD",
      date: "Jul 2019 - Dec 2020",
      points: [
        "Conducted comprehensive analysis of business processes to identify opportunities for improvement, leveraging IT solutions to optimize and streamline those processes.",
        "Collaborated with cross-functional teams to gather and document business requirements, translating them into technical specifications for system enhancements.",
        "Provided training and support to end-users, ensuring successful adoption and use of new technologies and systems.",
        "Demonstrated excellent communication skills, clearly explaining technical issues to non-technical users, and building strong relationships with team members and clients.",
      ],
    },
    {
      title: "Remote - Order fulfillment specialist",
      company_name: "Rehabmart.com",
      icon: rm,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - May 2022",
      points: [
        "Maintained a high level of accuracy and efficiency in processing 300+ POs per day, contributing to the company's overall success and achieving its goals and objectives.",
        "Conducted regular data analysis and reporting to monitor and improve order fulfillment processes, identifying areas for improvement and implementing effective solutions.",
        "Collaborated with cross-functional teams, including customer service, inventory management, and shipping, to ensure smooth and efficient order fulfillment processes.",
        "Demonstrated proficiency in using a variety of order management software and tools, including their own management software.",
      ],
    },
    {
      title: "Remote Technical Support Specialist",
      company_name: "TSG Proadvisor",
      icon: tsg,
      iconBg: "#E6DEDD",
      date: "May 2022 - Present",
      points: [
        "Provided expert technical support to clients of TSG Proadvisor, a leading provider of tax preparation software.",
        "Collaborated with cross-functional teams to gather and document technical requirements for software enhancements and upgrades.",
        "Demonstrated excellent communication skills, clearly explaining technical issues to non-technical users, and building strong relationships with team members and clients.",
        "Conducted remote troubleshooting and problem resolution for clients, using a variety of remote access tools and technologies to ensure quick and efficient resolution of technical issues.",
        "Maintained accurate and detailed technical support records, providing valuable insights and recommendations for improving technical support processes and customer satisfaction.",
      ],
    },
  ],
  projects: [
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
      source_code_link: "https://github.com/",
      website_link: "https://rent-dashboard.netlify.app/",
      logo: myLogo,
    },
  ],
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

export { services, technologies, experiences, testimonials, projects, data };

