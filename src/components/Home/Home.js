import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ModalImage from "react-modal-image";

import styles from "./Home.module.css";
import "./modal.css";

const Home = () => {
    return (
        <div className={styles["home-container"]}>
            <h1>FRAME PERFECT CONTROLLERS</h1>
            <div className={styles['carousel']}>
                <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <ModalImage 
                            hideDownload={true} 
                            hideZoom={true} 
                            small="https://i.ibb.co/yPscXdT/orange.png" 
                            medium="https://i.ibb.co/yPscXdT/orange.png"
                        />
                    </div>
                    <div>
                        <ModalImage 
                            hideDownload={true} 
                            hideZoom={true} 
                            small="https://i.ibb.co/dG1YYtV/blue-green.png" 
                            medium="https://i.ibb.co/dG1YYtV/blue-green.png"
                        />
                    </div>
                    <div>
                        <ModalImage 
                            hideDownload={true} 
                            hideZoom={true} 
                            small="https://i.ibb.co/wJ65w8c/sticks.png" 
                            medium="https://i.ibb.co/wJ65w8c/sticks.png"
                        />
                    </div>
                    <div>
                        <ModalImage 
                            hideDownload={true} 
                            hideZoom={true} 
                            small="https://i.ibb.co/42pD73M/watermelon.png" 
                            medium="https://i.ibb.co/42pD73M/watermelon.png"
                        />
                    </div>
                    <div>
                        <ModalImage 
                            hideDownload={true} 
                            hideZoom={true} 
                            small="https://i.ibb.co/9ghP0zg/panasonic1.png" 
                            medium="https://i.ibb.co/9ghP0zg/panasonic1.png"
                        />
                    </div>
                </Carousel>
            </div>
            <div className={styles['hero']}>
                <div className={styles['button-container']}>
                    <Link to='/portfolio'>
                        <Button text="See Work" color="green" width={100}/>
                    </Link>
                    <a href="https://frameperfectcontrollers.bigcartel.com/" target="_blank" rel='noreferrer'>
                        <Button text="Learn More" color="green" width={100}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
