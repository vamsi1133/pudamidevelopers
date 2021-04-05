import React, { useRef, useState } from 'react';
import Classes from './Home.module.scss'

const Home = () => {
    const sec1 = useRef();
    const sec2 = useRef();
    const sec3 = useRef();
    const sec4 = useRef();
    const sec5 = useRef();

    const [addBG, setAddBG] = useState(false)
    const [addSec2, setAddSec2] = useState(false)
    const [addSec3, setAddSec3] = useState(false)
    const [addSec4, setAddSec4] = useState(false)
    const [addSec5, setAddSec5] = useState(false)


    const scrolled = () => {
        let pos1 = sec1.current.offsetTop - window.scrollY;
        let pos2 = sec2.current.offsetTop - window.scrollY;
        let pos3 = sec3.current.offsetTop - window.scrollY;
        let pos4 = sec4.current.offsetTop - window.scrollY;
        let pos5 = sec5.current.offsetTop - window.scrollY;
        setAddBG(pos1 < 150)
        setAddSec2(pos2 < 700)
        setAddSec3(pos3 < 700)
        setAddSec4(pos4 < 700)
        setAddSec5(pos5 < 700)
    }

    return (
        <>
            <div id={Classes.Home} onWheel={scrolled} >
                <video autoPlay muted loop id="myVideo">
                    <source src="./intro.mp4" type='video/mp4' />
                </video>

                <section className={Classes.section1}>
                    <nav className={addBG && Classes.dark}>
                        <h1 > Pudami Developers</h1>
                    </nav>
                    <article >
                        <h3 id='sec1' ref={sec1}>SUNRISE TOWNSHIP </h3>
                        <h3>VELUGUBANDA </h3>
                        <h4> RAJAMAHENDRAVARAM</h4>
                    </article>
                </section>

                <section ref={sec2} className={Classes.section2}>
                    <h3 className={addSec2 && Classes.anime}>SUNRISE TOWNSHIP VELUGUBANDA - RAJAMAHENDRAVARAM  </h3>
                    <p className={addSec2 && Classes.anime}>
                        In newly formed state Amaravathi, Pudami developers entered in RajamahendraVaram along with CRDA Approved ventures and organic Farm Land fulfilled the dream of own home at the cost of our budget
                        </p>
                </section>

                <section className={Classes.section3}>
                    <div ref={sec3} className={addSec3 && Classes.anime}>
                        <h3>Venture Highlights</h3>
                        <div className={Classes.Ven}>
                            <img src='./demo.jpg' />
                            <p >
                                In the fastest growing cities of Rajamahendravaram a city having decades of great
                                history, The Dewan pond, nearest areas of Rajanagaram and National highway-16,
                                airport areas near to educational hub is a developing new mega project.
                    </p>
                        </div>
                    </div>
                </section>

                <section className={Classes.section4}>
                    <div className={addSec4 && Classes.anime}>
                        <h3 ref={sec4}>Venture Developments</h3>
                        <div className={Classes.Ven}>
                            <ul>
                                <li>GUDA layout</li>
                                <li>100% vastu and clear title</li>
                                <li>40 feet black top-up road</li>
                                <li>Under ground drainage-system, electricity facility</li>
                                <li>Overhead tank and direct water line to every plot</li>
                                <li>Provided with compound wall surrounding the entire venture with common entrance</li>
                                <li>Concept oriented park, and avenue plantation on both sides of the road</li>
                                <li>Spot registration along with bank loan facility.</li>
                            </ul>
                            <img src='./demo.jpg' />
                        </div>
                    </div>
                </section>

                <section className={Classes.section5}>
                    <div ref={sec5}>
                        <h3>Layout Plan Copy</h3>
                        <img width="100%" height="768px" className={addSec5 && Classes.layout} src="https://pudamidevelopers.com/wp-content/uploads/2019/05/0001-1.jpg" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;