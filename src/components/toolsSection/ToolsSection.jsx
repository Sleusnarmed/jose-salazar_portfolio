import styles from "./toolsSection.module.css";
import ReactLogo from "@/assets/img/react-logo.svg";
import NextjsLogo from "@/assets/img/nextjs-logo.svg";
import TypeScriptLogo from "@/assets/img/typescript-logo.svg";
import JavaScriptLogo from "@/assets/img/javascript-logo.svg";
import MongoDBLogo from "@/assets/img/mongodb-logo.svg";
import FirebaseLogo from "@/assets/img/firebase-logo.svg";
import NodeLogo from "@/assets/img/nodejs-logo.svg";
import TailwindLogo from "@/assets/img/tailwind-logo.svg";
import PrismaLogo from "@/assets/img/prisma-logo.svg";
import FigmaLogo from "@/assets/img/figma-logo.svg"

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
  { name: "Figma", Component: FigmaLogo },
];

const ToolsSection = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsContainer_toolsSection}>
        <div className={styles.toolsSection_Header}>
          <h2>Tools</h2>
        </div>
        <div className={styles.toolsSection_techLogos}>
          {techStack.map((tech, index) => {
            const Logos = tech.Component;
            return (
              <div className={styles.toolsSection_techItem} key={index}>
                <div className={styles.toolsSection_techLogo}>
                  <img src={Logos} alt={tech.name} className={styles.toolsSection_logoImage} />
                </div>
                <div className={styles.toolsSection_techName}>
                  <p className={styles.toolsSection_techText}>{tech.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.projectsContainer_projectsGallery}>
        <div className={styles.projectsGallery_Card}>
          <div className={styles.projectsGallery_Image}></div>
          <div className={styles.projectsGallery_Description}></div>
        </div>
        <div className={styles.projectsGallery_Card}>
          <div className={styles.projectsGallery_Image}></div>
          <div className={styles.projectsGallery_Description}></div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
