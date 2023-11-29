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
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI Developer",
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
      title: "Operation Manager - Team Leader",
      company_name: "Amazon",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2019 - April 2021",
      points: [
         "Supervise Amazon delivery drivers, ensuring adherence to schedules and safety.",
         "Manage driver training, performance, and issue resolution.",
         "Coordinate with logistics for optimal delivery routes.",
         "Monitor and report on delivery metrics.",
         "Enforce company policies for operational efficiency.",
         "Managed to increase the delivery performance by 15% in a year.",
         "In just one year, I managed to reduce our driver accident rate by an impressive 35%",
      ],
    },
    {
      title: "Odin Project",
      company_name: "Open-source community",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Intermediate HTML and CSS - Intermediate HTML Concepts, Intermediate CSS Concepts, Forms, Grid.",
        "JavaScript - I transformed my websites with dynamic and interactive elements using JavaScript. Projects included DOM manipulation, object-oriented programming, and fetching real-world data via APIs.",
        "Advanced HTML and CSS - Animation, Accessibility, Responsive Design",
        "React - States And Effects, Class Components, React Testing, The React Ecosystem, APIs",
        " NodeJS - Introduction to NodeJS, MongoDB, Authentication, APIs, Testing Express",
      ],
    },
    {
      title: "Operation Manager - Team Leader",
      company_name: "DHL",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
         "Organized and allocated parcels to drivers daily.",
         "Conducted daily inspections and maintenance for vans.",
         "Monitored and assisted drivers with problems or requests.",
         "Led the drivers' team and liaised with DHL's fulfilment center.",

      ],
    },
    {
      title: "Technical Support",
      company_name: "CMTrading",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Install and configure computer hardware, operating systems, and applications for the company.",
        "Maintain and monitor computer networks and systems.",
        "Log customer and employee queries.",
        "Test and evaluate new technology.",
        "Diagnose and solve hardware or software faults.",
        "Perform electrical safety checks on computer equipment. ",
        "Respond to call-outs promptly. ",
        "Follow written or diagram instructions for system setup or fault resolution. ",
        "We've seen a fantastic 15% increase in customer satisfaction, and our positive reviews have jumped by an extra 8% from over 1800 reviews. ",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Marinos proved me wrong.",
      name: "Kostas Evripidou",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Marinos does.",
      name: "Antonis Andreou",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Marinos optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Kyri Chris",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Youtube Clone",
      description:
        "Focused on functional components, reusability, and a tidy file structure in building the React web app. Mastered Material UI (v5) for an appealing design. Implemented responsive layouts for optimal user experience. Enabled seamless data fetching from various sources using RapidAPI. Achieved a solid setup, covering key aspects of a modern web app.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://effulgent-lolly-c3382d.netlify.app",
    },
    {
      name: "Fitness App",
      description:
        "Explored advanced React practices, refining file structure, and leveraging hooks effectively. Proficient in Material UI (v5) to prioritize an appealing user interface. Implemented data fetching from diverse sources using RapidAPI for dynamic information retrieval in the app. ",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://majestic-daffodil-9268bb.netlify.app",
    },
    {
      name: "React Portfolio",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "restAPI",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
    
      ],
      image: tripguide,
      source_code_link: "https://marinosgm.github.io/Reactportfolio/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };