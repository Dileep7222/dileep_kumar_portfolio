import style from "./studies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faPercent, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const Studies = () => {
  const studiesData = [
    {
      id: 1,
      title: "Graduation",
      institution: "Technocrats Institute of Technology - CSE (2024)",
      course: "B.Tech (CSE)",
      percentage: "82.60% (In CGPA 8.26)",
      marksheet:"./study/finalsem.pdf"
    },
    {
      id: 2,
      title: "Higher Secondary",
      institution: "Govt. Model School Ajaygarh (2020)",
      course: "PCM",
      percentage: "73%",
      marksheet:"./study/cl12.jpeg"

    },
    {
      id: 3,
      title: "High School",
      institution: "Govt. Higher Secondary School Sabdua (2018)",
      course: "General",
      percentage: "87",
      marksheet:"./study/cl10.jpeg"

    },
  ];

  return (
    <div className={style.container}>
      <h2>Education</h2>
      <br />
      {studiesData.map((study) => (
        <article key={study.id} className={style.graduation}>
          <h3>{study.title}</h3>
          <br />
          <section>
            <h5>
              <FontAwesomeIcon icon={faUserGraduate} size="2x" /> : {"  "}
              <b> {study.institution}</b>
            </h5>
            <p>
              <FontAwesomeIcon icon={faGraduationCap} size="1x" /> : {study.course}
            </p>
            <p>
              <FontAwesomeIcon icon={faPercent} size="1x" /> : <strong>{study.percentage}</strong>
            </p>
            <button className={style.marksheet}>
              <a href={study.marksheet}>Marksheet</a>
            </button>
          </section>
        </article>
      ))}
    </div>
  );
};

export default Studies;
