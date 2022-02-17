import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ModalImage from "react-modal-image";

import styles from "./Home.module.css";
import "./modal.css";

const Home = () => {
    useEffect(() => {
        document.querySelector("body").scrollTo(0,0)
      }, [])

    return (
        <div className={styles["home-container"]}>
            <h1>FRAME PERFECT CONTROLLERS</h1>
            <div className={styles['carousel']}>
                <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <ModalImage 
                            hideDownload={true} 
                            hideZoom={true} 
                            small="https://i.imgur.com/CI6zELl.jpg" 
                            medium="https://i.imgur.com/CI6zELl.jpg"
                        />
                    </div>
                    <div>
                        <ModalImage 
                            hideDownload={true} 
                            hideZoom={true} 
                            small="https://i.imgur.com/J7jmjwT.jpg" 
                            medium="https://i.imgur.com/J7jmjwT.jpg"
                        />
                    </div>
                    <div>
                        <ModalImage 
                            hideDownload={true} 
                            hideZoom={true} 
                            small="https://i.imgur.com/NC8SxFp.jpg" 
                            medium="https://i.imgur.com/NC8SxFp.jpg"
                        />
                    </div>
                    <div>
                        <ModalImage 
                            hideDownload={true} 
                            hideZoom={true} 
                            small="https://i.imgur.com/R0cwP3X.jpg" 
                            medium="https://i.imgur.com/R0cwP3X.jpg"
                        />
                    </div>
                    <div>
                        <ModalImage 
                            hideDownload={true} 
                            hideZoom={true} 
                            small="https://i.imgur.com/jPgnmkD.jpg" 
                            medium="https://i.imgur.com/jPgnmkD.jpg"
                        />
                    </div>
                </Carousel>
            </div>
            <div className={styles['hero']}>
                <div className={styles['button-container']}>
                    <Link to='/portfolio'>
                        <Button text="See Work" color="green" width={40}/>
                    </Link>
                    <a href="https://frameperfectcontrollers.bigcartel.com/" target="_blank" rel='noreferrer'>
                        <Button text="View Shop" color="green" width={40}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
