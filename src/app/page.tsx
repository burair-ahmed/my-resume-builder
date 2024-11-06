// import Image from "next/image";

import Certifications from "./components/Certifications/certifications";
import Education from "./components/Education/education";
import Experience from "./components/Experience/experience";
import Personalinfo from "./components/Personal Info/personal-info";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";

export default function Home() {
  return (
  <div>
    
    <Personalinfo/>
    <Education/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Certifications/>
  </div>
  );
}
