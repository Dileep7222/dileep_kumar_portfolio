import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import style from "./Port.module.css";

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") === "dark" : false
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <>
            <nav className={style.Navbar}>
                <aside>Portfolio</aside>

                <ul className={style.navLinks}>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/studies">Studies</Link></li>
                    <li><Link to="/Project">Projects</Link></li>
                    <li><Link to="/certificate">Certificates</Link></li>
                    <li><Link to="/Plateform">Contact</Link></li>
                </ul>

                {/* Beautiful Theme Toggle Button */}
                <button
                    className={`${style.themeToggle} ${darkMode ? style.dark : style.light}`}
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Toggle Theme"
                >
                    <span className={style.toggleCircle}>
                        {darkMode ? <FaMoon className={style.icon} /> : <FaSun className={style.icon} />}
                    </span>
                </button>


            </nav>
        </>
    );
};

export default Portfolio;
