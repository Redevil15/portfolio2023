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
  meta,
  starbucks,
  tesla,
  fiverr,
  ids,
  shopify,
  bdevmedia,
  jobit,
  tripguide,
  threejs,
  bcoffe,
  blyrics,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "3D visuals Developer",
    icon: backend,
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
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#fff",
    date: "August 2020 - February 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Use SCRUM metodology",
      "Use Git, GitLab, GitHub",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company_name: "Jalisoft",
    icon: "",
    iconBg: "#E6DEDD",
    date: "December 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Sr. System Engineer",
    company_name: "IDS Comercial",
    icon: ids,
    iconBg: "#86b81d",
    date: "February 2023 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "B Dev Media",
    description:
      "Web app based on youtube, everyone can just click and watch whatever they want!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "materialUi",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
    ],
    image: bdevmedia,
    source_code_link: "https://github.com/Redevil15/BDevMedia",
    source_project_link: "https://bdevmedia.netlify.app/",
  },
  {
    name: "Lyriks",
    description:
      "Web application that enable users to listen all kind of songs, it's like spotify but for free!.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "materialUi",
        color: "green-text-gradient",
      },
    ],
    image: blyrics,
    source_code_link: "https://github.com/Redevil15/LyriksProject",
    source_project_link: "https://bff-lyricsproyect.netlify.app/",
  },
  {
    name: "Coffe Blog",
    description:
      "A web blog where the users can check news and history about coffe, as well as see recipes and ways of preparation .",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bcoffe,
    source_code_link: "https://github.com/Redevil15",
    source_project_link: "https://proyecto02blogdecafe-bfigueroa.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
