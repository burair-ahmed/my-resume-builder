// import Image from "next/image";

import Education from "./components/Education/education";
import Experience from "./components/Experience/experience";
import Personalinfo from "./components/Personal Info/personal-info";

export default function Home() {
  return (
  <div>
    
    <Personalinfo/>
    <Education/>
    <Experience/>
  </div>
  );
}
