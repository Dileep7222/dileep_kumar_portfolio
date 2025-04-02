import  { useEffect, useState, useRef } from "react";
import style from "./certificates.module.css";

const certificatesData = [
  { src: "./study/fullstack.jpg", alt: "full-stack" },
];

const Certificates = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;

      // Space calculation based on screen scroll
      const spaceAvailable = screenHeight - rect.top;
      const imagesToShow = Math.floor(spaceAvailable / 300) * 3; // 3 images per row
      setVisibleCount(imagesToShow);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={style.container} ref={sectionRef}>
      <h2 className={style.title}>Certificates</h2>
      <div className={style.grid}>
        {certificatesData.map((certificate, index) => (
          <img
            key={index}
            src={certificate.src}
            alt={certificate.alt}
            className={`${style.Certificates} ${index < visibleCount ? style.show : style.hide}`}
            style={{ transitionDelay: `${(index % 3) * 200}ms` }} // Delay per row for better effect
          />
        ))}
      </div>
      <a href="./study/fullstack.jpg" target="_blank" className={style.button}>
        Download PDF
      </a>
    </section>
  );
};

export default Certificates;
