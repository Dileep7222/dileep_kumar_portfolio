import  { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Layout.module.css"; 

import Portfolio from "./Portfolio";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Certificates from "../Pages/Certificates";
import Plateform from "../Pages/Plateform";
import Studies from "../Pages/Studies";
import TechnicalSkill from "../Pages/TechnicalSkill";
import Tools from "../Pages/Tools";
import Footer from "./Footer";
import Projects from "../Pages/Projects";

gsap.registerPlugin(ScrollTrigger);



const Layout = () => {
  const sectionsRef = useRef([]);
  const location = useLocation(); // 

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.1,  // 
          ease: "power2.out",
          delay: index * 0.1, // 
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    const sectionId = location.pathname.replace("/", "");
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className={styles.container1}>
      <section ref={(el) => (sectionsRef.current[0] = el)} className={styles.section1} id="navbar">
        <Portfolio/>
      </section>
      <section ref={(el) => (sectionsRef.current[1] = el)} className={styles.section1} >
        <Home />
      </section>
      <section ref={(el) => (sectionsRef.current[2] = el)} className={styles.section1} id="about">
        <About />
      </section>
      <section ref={(el) => (sectionsRef.current[3] = el)} className={styles.section1} id="studies">
        <Studies />
      </section>
      <section ref={(el) => (sectionsRef.current[5] = el)} className={styles.section1} id="Project">
        <Projects />
      </section>
      <section ref={(el) => (sectionsRef.current[4] = el)} className={styles.section1} id="skill">
        <TechnicalSkill />
      </section>
      <section ref={(el) => (sectionsRef.current[6] = el)} className={styles.section1} id="Plateform">
        <Plateform />
      </section>
      <section ref={(el) => (sectionsRef.current[7] = el)} className={styles.section1} id="certificate">
        <Certificates />
      </section>
      <section ref={(el) => (sectionsRef.current[8] = el)} className={styles.section1} id="tools">
        <Tools />
      </section>
      <section ref={(el) => (sectionsRef.current[9] = el)}>
        <Footer/>
      </section>
    </div>
  );
};

export default Layout;
