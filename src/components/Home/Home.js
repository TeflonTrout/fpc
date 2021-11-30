import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "../../assets/orange.png";
import image2 from "../../assets/blue_green.png";
import image3 from "../../assets/watermelon.png";

import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles["home-container"]}>
            <h1>FRAME PERFECT CONTROLLERS</h1>
            <div className={styles['carousel']}>
                <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                    <div>
                        <img src={image2} alt="" />
                    </div>
                    <div>
                        <img src={image3} alt="" />
                    </div>
                </Carousel>
            </div>
            <div className={styles['hero']}>
                {/* <h4 className={styles['h4']}>1 frame makes all the difference</h4> */}
                <div className={styles['button-container']}>
                    <Link to='/portfolio'>
                        <Button text="See Builds" color="green"/>
                    </Link>
                    <a href="https://frameperfectcontrollers.bigcartel.com/" target="_blank" rel='noreferrer'>
                        <Button text="Shop" color="green"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
