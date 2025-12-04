import ProjectContainer from "@/components/projectContainer/projectContainer";
import styles from "./projects.module.css";
import mockupImage from "@/assets/img/mockup.webp";
import reactLogo from '@/assets/img/react-logo.svg'
import nextJs from '@/assets/img/nextjs-logo.svg'
import figma from '@/assets/img/figma-logo.svg'
import firebase from '@/assets/img/firebase-logo.svg'
import tailwind from '@/assets/img/tailwind-logo.svg'


const projectsData = [
  {
    title: "Proyecto 1",
    description: "App creada con React y Tailwind Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nihil.",
    image: mockupImage,
    tech: [reactLogo, figma],
    githubUrl: "https://github.com/demo",
    demoUrl: "https://demo.com",
  },
  {
    title: "Proyecto 2",
    description: "App creada con React y Tailwind Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nihil.",
    image: mockupImage,
    tech: [nextJs, firebase, tailwind],
    githubUrl: "https://github.com/demo",
    demoUrl: "https://demo.com",
  },

  {
    title: "Proyecto 3",
    description: "App creada con React y Tailwind Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nihil.",
    image: mockupImage,
    tech: [reactLogo, firebase, tailwind],
    githubUrl: "https://github.com/demo",
    demoUrl: "https://demo.com",
  },

  {
    title: "Proyecto 2",
    description: "App creada con React y Tailwind Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nihil.",
    image: mockupImage,
    tech: [nextJs, firebase],
    githubUrl: "https://github.com/demo",
    demoUrl: "https://demo.com",
  },

  
];
const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.gridMasonry}>
        {projectsData.map((project, index) => (
          <ProjectContainer key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
