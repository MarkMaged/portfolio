import project1 from "../assets/projects/p1.png";
import project2 from "../assets/projects/Movie.png";
import project3 from "../assets/projects/p3.png";
import Quiz from "../assets/projects/Quiz.png";
import FAK from '../assets/projects/FAK.png';
import logo1 from '../assets/logo1.png';



import portfolio2 from "../assets/projects/portfolio2.png";
import FAY from "../assets/cultureimage.gif";
import AMIT from "../assets/Amit.png";



export const INTERNSHIP = [
  {
    title: "Full Stack Web Development Diploma",
    image: AMIT,
    company: "AMIT",
    date: "Dec, 2022 - May, 2023",
    description: `Earned a Full Stack Diploma from AMIT Learning (PHP Laravel & Vue 3), where I built real-world applications, developed RESTful APIs, and implemented full front-end and back-end integrations.`
  }
];

export const HERO_CONTENT = `I’m a passionate Front-End Developer dedicated to building dynamic, scalable, 
  and high-performing web applications. With over a year of hands-on experience, I specialize in crafting intuitive 
  and visually stunning user interfaces using modern front-end technologies, including HTML5, CSS3, JavaScript, TypeScript, jQuery, Bootstrap, Tailwind CSS, SCSS, React, and Next.js,
  as well as  technologies like Firebase. and I am also good at dealing with Figma My goal is to leverage my expertise to create innovative solutions that drive business
  growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a Full Stack Developer with 3+ years of experience building scalable, production-ready web applications across multiple industries including e-learning and logistics. I started my journey specializing in Front-End development using Vue.js, React.js, and Next.js, and have evolved into a Full Stack role working with Laravel to deliver complete end-to-end solutions.

I have hands-on experience developing full systems from scratch, including dynamic websites, admin dashboards, and complex business workflows. My work includes building booking and payment systems, shipment tracking platforms, and role-based access control systems, all currently running in production environments.

On the front-end, I focus on performance, clean UI/UX, and SEO optimization, with practical experience in improving indexing and supporting marketing strategies through analytics and structured data. On the backend, I design and develop RESTful APIs, handle business logic, and debug complex systems efficiently.

I am comfortable taking full ownership of features (epics), delivering both frontend and backend implementations independently. I also have experience working with Docker for development environments and understand containerized workflows.

Passionate about writing clean, maintainable code and continuously improving my skills, I aim to build reliable, high-performance applications that deliver real business value.`;

export const EXPERIENCES = [
  {
    year: "Jul 2025 – Present | Cairo, Egypt",
    role: "Full Stack Developer",
    company: "Sinbad",
    expPoints: [
      "- Developed a transportation and logistics system using Vue.js and Laravel.",
      "- Designed scalable API integrations between frontend and backend.",
      "- Built internal dashboards for operational management.",
      "- Optimized database queries for high-volume transactions.",
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "React", "GitHub", "Responsive Design", "Bootstrap", "PrimeVue"],
    projects: [
      { name: "Sinbad", links: { live: "https://sinbadnow.com/" } }
    ]
  },
  {
    year: "Oct 2024 – Jun 2025 | Cairo, Egypt",
    role: "Front-End Developer",
    company: "Sinbad",
    expPoints: [
      "- Lead frontend development of logistics system using Vue.js and Next.js.",
      "- Built reusable component architecture using Vue 3.",
      "- Improved UX and system performance across the platform.",
    ],
    technologies: ["Vue.js", "React", "Next.js", "GitHub", "Responsive Design", "Bootstrap", "PrimeVue"],
    projects: [
      { name: "Sinbad", links: { live: "https://sinbadnow.com/" } }
    ]
  },
  {
    year: "Mar 2024 – Sep 2024 | Cairo, Egypt",
    role: "Front-End Developer",
    company: "Harbor Tech",
    expPoints: [
      "- Developed Harbor Tech CRM V2 using Vue 3.",
      "- Built company website using Next.js with focus on performance & SEO.",
      "- Improved workflow automation inside internal CRM.",
    ],
    technologies: ["Vue.js", "Next.js", "GitHub", "Responsive Design", "Bootstrap", "PrimeVue"],
    projects: [
      { name: "Harbor Tech", links: { live: "https://harbor-tech.io/" } }
    ]
  },
  {
    year: "Dec 2022 – May 2024 | Cairo, Egypt",
    role: "Front-End Developer",
    company: " AMIT Learning",
    expPoints: [
      "- Built official company website using Vue.js with focus on performance & SEO.",
      "- Developed internal CRM V2.",
      "- Converted UI/UX designs into functional, interactive web components.",
    ],
    technologies: ["Vue.js", "GitHub", "Responsive Design", "Bootstrap", "PrimeVue"],
    projects: [
      { name: " AMIT Learning", links: { live: "https://amit-learning.com/" } }
    ]
  },
];


export const PROJECTS = [
  {
    title: "Handmade E-Commerce Website",
    image: project1,
    description:
      "A full-stack handmade e-commerce platform that connects customers with vendors offering handcrafted products. The system supports a smooth and secure shopping experience, real-time admin control, and a vendor management system.",
    technologies: ["HTML5", "CSS3", "React", "JavaScript", "TypeScript", "TailwindCSS", "Firebase", "Context API", "Cloudinary"],
    liveDemo : "https://hand-made-website-graduation-projec-seven.vercel.app/"
  },
  {
    title: "The Movie Application",
    image : project2,
    description: "A modern and feature-rich Movie Web Application built with Angular 17, offering seamless user authentication, movie browsing, and personalized experiences. The app integrates with The Movie Database (TMDb) API to fetch real-time movie data, and includes both public and protected routes.",
    technologies : ["HTML5", "CSS3", "Angular", "TypeScript", "TailwindCSS", "API"],
    liveDemo : "https://movie-application-cbut.vercel.app/movies"
  },
  {
    title: "The Management Application",
    image : project3,
    description: "A full-featured CRUD (Create, Read, Update, Delete) application built with JavaScript for managing products efficiently. This system allows you to add, edit, delete, and search products, with data stored locally for persistence. Designed with a clean and responsive interface to ensure an intuitive user experience.",
    technologies : ["HTML5", "CSS3", "JavaScript"],
    liveDemo : "https://fadygabriel.github.io/management-project/"
  },
  {
    title: "Quiz Application",
    image : Quiz,
    description: "A simple and interactive quiz application designed to test your knowledge of HTML, CSS, and JavaScript. The app presents multiple-choice questions, tracks your score. Built with clean, responsive design for a smooth user experience.",
    technologies : ["HTML5", "CSS3", "JavaScript"],
    liveDemo : "https://quiz-hnsqz1o6n-fadygabriels-projects.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: portfolio2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveDemo : "https://fadygabriel.netlify.app/"
  },
    {
    title: "FAK Sport Website",
    image: FAK,
    description:
      "FAK is a sports platform focused on football and basketball, offering live scores, real-time match updates, and a responsive design with an exceptional UI/UX experience.",
    technologies: ["HTML5", "CSS3", "JavaScript" , "React" , "Tailwind" , "Context API"],
    liveDemo : "https://fak-one.vercel.app/"
  },
];

export const CONTACT = {
  address: "Cairo , Egypt",
  phoneNo: "+20 102 702 2138",
  email: "markmaged399@gmail.com",
};

export const EDUCATION = {
  image: FAY,
  Name: "Bachelor of Computer Science | Culture and Science University | 2017 – 2021",
  // GPA: "Fair ",
  GradPro: "Good",
};

export const CERTIFICATIONS = [
  {
    title: "CSS(Basic)",
    image: logo1,
    link : "https://www.hackerrank.com/certificates/743365837ae1"
  },
];