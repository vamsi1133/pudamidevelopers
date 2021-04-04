import React, { useEffect, useRef, useState } from 'react';
import Classes from './Home.module.scss'

const Home = () => {
    const [addBG, setAddBG] = useState(false)
    const scrolled = () => {
        let pos = myref.current.offsetTop - window.scrollY;
        if (pos < 150) {
            setAddBG(true)
        } else {
            setAddBG(false)
        }

    }

    const myref = useRef();
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
                        <h3 ref={myref}>SUNRISE TOWNSHIP </h3>
                        <h3>VELUGUBANDA </h3>
                        <h4> RAJAMAHENDRAVARAM</h4>
                    </article>
                </section>
                <section className={Classes.section2}>
                    <h3 >SUNRISE TOWNSHIP VELUGUBANDA - RAJAMAHENDRAVARAM  </h3>
                    <p>
                        In newly formed state Amaravathi, Pudami developers entered in RajamahendraVaram along with CRDA Approved ventures and organic Farm Land fulfilled the dream of own home at the cost of our budget
                    </p>
                </section>
            </div>
        </>
    )
}

export default Home;