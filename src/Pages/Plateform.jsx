import style from "./Plateform.module.css"

const Plateform = () => {
  return (
    <section className={style.container}>
        <h3>Connect With Us</h3>
        <article>

            <div className={style.plateform}>
                <h2>Soical Media Platforms</h2>
                <ul>
                    <li>
                        <a href="mailto:dileepkumar93635@gmail.com">
                            <img src="./assets/Gmail.svg" alt="" />
                            <b>Email</b>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/7222914169">
                            <img src="./assets/WhatsApp.svg" alt="" />
                            <b>WhatsApp</b>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dileepkumar33/">
                            <img src="./assets/Linkdin.svg" alt="" />
                            <b>LinkedIn</b>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/choudhary_dileep_kumar">
                            <img src="./assets/Instagram.svg" alt="" />
                            <b>Instagram</b>
                        </a>
                    </li>
                
                </ul>
                
            </div>

            <div className={style.plateform}>
                <h3>Coding Plateforms</h3>
                <ul>
                    <li>
                        <a href="https://www.hackerrank.com/profile/dileep7222">
                            <img src="./assets/hackerrank.svg" alt="" />
                            <b>HackerRank</b>
                        </a>
                    </li>
                    <li>
                        <a href="https://leetcode.com/u/dileepkumar/">
                            <img src="./assets/Leetcode.png" alt="" />
                            <b>LeetCode</b>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="./assets/VScode.png" alt="" />
                            <b>Visual Studio code</b>
                        </a>
                    </li>
                </ul>
                
            </div>

            <div className={style.plateform}>
                <h3>Cloud Plateforms</h3>
                <ul>
                    <li>
                        <a href="https://github.com/Dileep7222">
                            <img src="./assets/Github.svg" alt="" />
                            <b>GitHub</b>
                        </a>
                    </li>
                </ul>
            </div>

        </article>
      

    </section>
  )
}

export default Plateform
