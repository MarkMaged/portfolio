import project1 from "../assets/projects/p1.png";
import project2 from "../assets/projects/Movie.png";
import project3 from "../assets/projects/p3.png";
import Quiz from "../assets/projects/Quiz.png";
import FAK from '../assets/projects/FAK.png';
import logo1 from '../assets/logo1.png';



import portfolio2 from "../assets/projects/portfolio2.png";
import FAY from "../assets/fayoum.png";
import ITI from "../assets/download.png";



export const INTERNSHIP = [
  {
    title: "Frontend Developer & Cross Platform Mobile Development (Feb 2025 – July 2025)",
    image: ITI,
    description: `Completed intensive training in HTML, CSS, JavaScript, TypeScript, and modern frameworks like ReactJS and Angular. Learned Cross Platform Mobile Development using Flutter and React Native.
    Built real-world projects simulating industry practices, applying API integration, Firebase, and state management.
    Participated in team-based development following Agile methodologies and Git version control.
    Improved UI/UX design principles, component reusability, and performance optimization`
  }
];

export const HERO_CONTENT = `I’m a passionate Front-End Developer dedicated to building dynamic, scalable, 
  and high-performing web applications. With over a year of hands-on experience, I specialize in crafting intuitive 
  and visually stunning user interfaces using modern front-end technologies, including HTML5, CSS3, JavaScript, TypeScript, jQuery, Bootstrap, Tailwind CSS, SCSS, React, and Next.js,
  as well as  technologies like Firebase. and I am also good at dealing with Figma My goal is to leverage my expertise to create innovative solutions that drive business
  growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and adaptable Front-End Developer with a strong passion for building efficient, 
  responsive, and user-centric web applications. My expertise spans modern technologies such as React, Next.js and Firebase, 
  enabling me to create scalable and high-performing solutions.
  My journey in web development began with a deep curiosity about how things work, 
  which has grown into a career driven by continuous learning and innovation. I thrive in collaborative environments, 
  where I enjoy solving complex problems and delivering high-quality, impactful solutions.
  Beyond coding, I love exploring emerging technologies, contributing to open-source projects, 
  and staying active to maintain a balanced and creative mindset.`;

export const EXPERIENCES = [
  {
    year: "Nov 2024 – Present | Cairo, Egypt",
    role: "Front-end Developer",
    company: "Freelancer",
    description: `Worked as a freelance front-end developer on various projects.`,
    technologies: ["React", "GitHub", "Responsive Design"],
    projects: [
      { name: "Tech-seeds learning website", links: { live: "https://tech-seeds.vercel.app/" } }
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
  phoneNo: "+20 127 855 8947",
  email: "fadyghobrial123@gmail.com",
};

export const EDUCATION = {
  image: FAY,
  Name: "Engineering, Civil Engineering Department Fayoum University",
  // GPA: "Fair ",
  // GradPro: "Very Good",
};

export const CERTIFICATIONS = [
  {
    title: "CSS(Basic)",
    image: logo1,
    link : "https://www.hackerrank.com/certificates/743365837ae1"
  },
];