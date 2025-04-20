import style from "./Project.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Projects = () => {
  return (
    <div className={style.container}>
      <h3>Projects</h3>

      <article>
        <div className={style.project}>
          <h2>Portfolio</h2>
          <hr />
          <img src="./assets/portfolio.png" alt="Project01" />
          <div><a href="https://dileep7222.github.io/dileep_kumar_portfolio/">View Here</a></div>
        </div>

        <div className={style.project}>
          <h2>StudyVilla</h2>
          <hr />
          <img src="./assets/studyvilla.png" alt="Project 2" />
          <div><a href="https://dileep7222.github.io/STUDY_VILLA/">View Here</a></div>

        </div>

        <div className={style.project}>
          <h2>Picverse</h2>
          <hr />
          <img src="./assets/picverse.png" alt="Project 3" />
          <div><a href="https://dileep7222.github.io/PicVerse/">View Here</a></div>
        </div>
        <div className={style.project}>
          <h2>Apple Vision Pro_Clone</h2>
          <hr />
          <img src="./assets/p4.png" alt="Project 4" />
          <div> <a href="https://dileep7222.github.io/apple-vision-pro-clone/">View Here</a></div>
        </div>
      </article>

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={style.swiperContainer}
      >
        <SwiperSlide>
          <div className={style.project}>
            <h2>Portfolio    (React)</h2>
            <hr />
            <img src="./assets/portfolio.png" alt="Project 1" />
            <div><a href="https://dileep7222.github.io/dileep_kumar_portfolio/">View Here</a></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.project}>
            <h2>StudyVilla  (Html,css,Javascript)</h2>
            <hr />
            <img src="./assets/studyvilla.png" alt="Project 2" />
            <div><a href="https://dileep7222.github.io/STUDY_VILLA/">View Here</a></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.project}>
            <h2>PicVerse (Html,css,Javascript)</h2>
            <hr />
            <img src="./assets/picverse.png" alt="Project 3" />
            <div><a href="https://dileep7222.github.io/PicVerse/">View Here</a></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.project}>
            <h2>Apple Vision Pro_clone (Html,css,Javascript)</h2>
            <hr />
            <img src="./assets/p4.png" alt="Project 4" />
            <div><a href="https://dileep7222.github.io/apple-vision-pro-clone/">View Here</a></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
