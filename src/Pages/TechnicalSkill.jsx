import style from"./Technical.module.css"

const TechnicalSkill = () => {
  return (
    <div className={style.container}>
        <h2 className={style.title}>Technical Skills</h2>
        <section>
            <div className={style.programming}>
                <h3 className={style.stack}> <b>Programming</b></h3>
                <main>
                    <img src="./assets/c.jpeg" alt=""  className={style.Icon}/><br />
                    <font>c</font>
                </main>
                <main>
                    <img src="./assets/java.jpeg" alt=""  className={style.Icon}/><br />
                    <font>Java</font>
                </main>
                <main>
                    <img src="./assets/javascript.svg" alt="" className={style.Icon}/>
                    <font>JavaScript</font>
                </main>
                
            </div>
            <div className={style.programming}>
                <h3 className={style.stack}> <b>Framework</b></h3>
                <main>
                    <img src="./assets/bootstrap.jpeg" alt=""  className={style.Icon}/><br />
                    <font>Bootstrap</font>
                </main>
                <main>
                    <img src="./assets/material-ui.jpeg" alt=""  className={style.Icon}/><br />
                    <font>Materila Ui</font>
                </main>
                <main>
                    <img src="./assets/tlw.jpeg" alt="" className={style.Icon}/>
                    <font>Tailwind</font>
                </main>
                <main>
                    <img src="./assets/express.jpeg" alt="" className={style.Icon}/>
                    <font>ExpressJs</font>
                </main>
                
            </div>
            <div className={style.programming}>
                <h3 className={style.stack}> <b>Database</b></h3>
                <main>
                    <img src="./assets/sql.jpeg" alt=""  className={style.Icon}/><br />
                    <font>SQL</font>
                </main>
                <main>
                    <img src="./assets/mongodb.jpeg" alt=""  className={style.Icon}/><br />
                    <font>Mongo Db</font>
                </main>
    
            </div>
            
            <div className={style.web}>
                <h3 className={style.stack}> <b>Web Technology</b></h3>
                <section className={style.frontendSection}>
                    <div>
                        <main>
                            <img src="./assets/html.svg" alt="" className={style.Icon}/>
                            <font>HTML</font>
                        </main>
                        <main>
                            <img src="./assets/css-alt.svg" alt="" className={style.Icon}/>
                            <font>CSS</font>
                        </main>
                    </div>
                    <div>
                        <main>
                            <img src="./assets/javascript.svg" alt="" className={style.Icon}/>
                            <font>JavaScript</font>
                        </main>
                        <main>
                            <img src="./assets/react.svg" alt="" className={style.Icon}/>
                            <font>React</font>
                        </main>
                        <main>
                            <img src="./assets/node.jpeg" alt="" className={style.Icon}/>
                            <font>NodeJs</font>
                        </main>
                    </div>
                </section>
            </div>

        </section> 
    </div>

  )
}

export default TechnicalSkill
