import style from "./home.module.css"

const Home = () => {
    return (
        <div>
            <div className={style.container}>
                <img src="./Dileep.jpg" alt="Profile" />
                <div className={style.profile}>
                    <p>Dileep Kumar Ahirwar</p>
                    <br />
                    <p>| FRONT END DEVELOPER|</p>
                    <p>| BACK END DEVELOPER |</p>
                    <p>| MERN STACK DEVELOPER |</p>
                    <button className={style.CV}><a href="./assets/dileepkumar.pdf">download cv</a></button>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default Home;