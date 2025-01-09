import styles from "./projects.module.css";
import ReactLogo from "@/assets/img/react-logo.svg";
import NextjsLogo from "@/assets/img/nextjs-logo.svg";
import TypeScriptLogo from "@/assets/img/typescript-logo.svg";
import JavaScriptLogo from "@/assets/img/javascript-logo.svg";
import MongoDBLogo from "@/assets/img/mongodb-logo.svg";
import FirebaseLogo from "@/assets/img/firebase-logo.svg";
import NodeLogo from "@/assets/img/nodejs-logo.svg";
import TailwindLogo from "@/assets/img/tailwind-logo.svg";
import PrismaLogo from "@/assets/img/prisma-logo.svg";

const techStack = [
  { name: "React", Component: ReactLogo },
  { name: "NextJS", Component: NextjsLogo },
  { name: "Node", Component: NodeLogo },
  { name: "MongoDB", Component: MongoDBLogo },
  { name: "JavaScript", Component: JavaScriptLogo },
  { name: "Firebase", Component: FirebaseLogo },
  { name: "TypeScript", Component: TypeScriptLogo },
  { name: "Tailwind", Component: TailwindLogo },
  { name: "Prisma", Component: PrismaLogo },
];

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsContainer__tools}>
        <div className={styles.tools_text}>
          <h2>Tools</h2>
        </div>
        <div className={styles.tools_imageContainer}>
          {techStack.map((tech, index) => {
            const Logo = tech.Component; // Renombrado para mayor claridad
            return (
              <div className={styles.imageContainer_wrapper} key={index}>
                <img src={Logo} alt={tech.name} className={styles.wrapper_image} />
                <span className={styles.wrapper_image__text}>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.projectsContainer__imagesProject}>
        <div className={styles.imageProject_wrapper}>
          <div className={styles.wrapper_imageContainer}></div>
          <div className={styles.wrapper_textContainer}></div>
        </div>
        <div className={styles.imageProject_wrapper}>
          <div className={styles.wrapper_imageContainer}></div>
          <div className={styles.wrapper_textContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
