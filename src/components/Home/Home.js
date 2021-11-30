import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Logo from "../../images/FramePerfectControllers.png"

import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles["home-container"]}>
            <div className={styles['hero']}>
                <h1>FRAME PERFECT CONTROLLERS</h1>
                <h4 className={styles['h4']}>1 frame makes all the difference</h4>
                <div className={styles['button-container']}>
                    <Link to='/portfolio'>
                        <Button text="See Builds" color="green"/>
                    </Link>
                    <a href="https://frameperfectcontrollers.bigcartel.com/" target="_blank">
                        <Button text="Shop" color="green"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
