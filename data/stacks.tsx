import {
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiCplusplus,
  SiLeetcode,
  SiMongodb, // Import MongoDB icon
} from "@icons-pack/react-simple-icons";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  JavaScript: (
    <SiJavascript
      size={iconSize}
      color="default"
    />
  ),
  TypeScript: (
    <SiTypescript
      size={iconSize}
      color="default"
    />
  ),
  "Next.js": (
    <SiNextdotjs
      size={iconSize}
      color="default"
    />
  ),
  "React.js": (
    <SiReact
      size={iconSize}
      color="default"
    />
  ),
  TailwindCSS: (
    <SiTailwindcss
      size={iconSize}
      color="default"
    />
  ),
  Vite: (
    <SiVite
      size={iconSize}
      color="default"
    />
  ),
  Firebase: (
    <SiFirebase
      size={iconSize}
      color="default"
    />
  ),
  "Node.js": (
    <SiNodedotjs
      size={iconSize}
      color="default"
    />
  ),
  Docker: (
    <SiDocker
      size={iconSize}
      color="default"
    />
  ),
  Postman: (
    <SiPostman
      size={iconSize}
      color="default"
    />
  ),
  MongoDB: (
    <SiMongodb
      size={iconSize}
      color="default"
    />
  ),
  HTML5: (
    <SiHtml5
      size={iconSize}
      color="default"
    />
  ),
  CSS: (
    <SiCss3
      size={iconSize}
      color="default"
    />
  ),
  Bootstrap: (
    <SiBootstrap
      size={iconSize}
      color="default"
    />
  ),
  Express: (
    <SiExpress
      size={iconSize}
      color="default"
    />
  ),
  Git: (
    <SiGit
      size={iconSize}
      color="default"
    />
  ),
  Github: (
    <SiGithub
      size={iconSize}
      color="default"
    />
  ),
  "C++": (
    <SiCplusplus
      size={iconSize}
      color="default"
    />
  ),
  DSA: (
    <SiLeetcode
      size={iconSize}
      color="default"
    />
  ),
};