import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  hungryChef,
  kiddToy,
  eliteFightClub,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Social Media Marketer",
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

const testimonials = [
  {
    testimonial:
      "A hidden gem of gastronomy brought to life through a meticulously crafted website, showcasing the essence of our restaurant's culinary excellence.",
    name: "Ada Morris",
    designation: "Owner",
    company: "Hungry Chef",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU",
  },
  {
    testimonial:
      "We celebrate the whimsical wonderland you've created through your exceptional toy-selling website. Thank you for making childhood dreams a reality!",
    name: "Chris Brown",
    designation: "CEO",
    company: "Kidd Toy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYklqWX1v2p2Q5z1JfpDjb7_xjFQjJb3If53FxhclZR6RerZlKBas9RPYSqc-jvgBZLg&usqp=CAU",
  },
  {
    testimonial:
      "I highly recommend their website-building services to anyone in need of a professional, reliable, and innovative partner. You should give a try.Thanks for developers service.",
    name: "Andres Martial",
    designation: "CTO",
    company: "Elite Fight Club",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXARSmOhxqiC4-LQ_PYl4yiXmzo-HT_h9yCatSk_wqHvQvdBfSX-RPhdlaTNkUR5Yb_34&usqp=CAU",
  },
];

const projects = [
  {
    name: "HungyChef",
    description:
      "Single Page Application. Dynamic Website, Email Password Authentication, Google/Github Authentication. Getting Italian Chefs and their top 3 recipes, Using Animation on UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: hungryChef,
    source_code_link: "https://github.com/yeasinrafee/Hungry-Chef-Client",
    live_link: "https://hungry-chef-client.web.app/",
  },
  {
    name: "KiddToY",
    description:
      "Single Page Application. Full Stack CURD Application. Email-Password, Google Authentication. User Can Add Their Toy, User Can Watch their Toys. User Can update or Delete their Toys. Everyone Car see All toys.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
    ],
    image: eliteFightClub,
    source_code_link: "https://github.com/yeasinrafee/kidd-toy-client",
    live_link: "https://kidd-toy-client.web.app/",
  },
  {
    name: "EliteFightClub",
    description:
      "Three roles of the user (admin, instructor and student). Admin can handle all the functionalities. An Instructor can create or update a class.Students can also pay for the class and start join the class.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
    ],
    image: kiddToy,
    source_code_link: "https://github.com/yeasinrafee/elite-fight-club-client",
    live_link: "https://elite-fight-club.web.app/",
  },
];

export { services, technologies, testimonials, projects };
