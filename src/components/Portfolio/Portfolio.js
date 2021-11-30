import React from 'react';
import Image from '../Image/Image';

import styles from './Portfolio.module.css';
// FULL BUILDS
import zombie from "../../assets/zombie.png";
import watermelon from "../../assets/watermelon.png";
import pumpkin from "../../assets/pumpkin.png";
import orange from "../../assets/orange.png";
import blue_green from "../../assets/blue_green.png";
import turqoise from "../../assets/turqoise.png";
import n64 from "../../assets/n64.png";
// RESIN WARE
import sticks from "../../assets/sticks.png";
import buttons from "../../assets/buttons.png";
import buttons1 from "../../assets/buttons1.png";
import buttons2 from "../../assets/buttons2.png";
import plugcovers from "../../assets/plugcovers.png";
// BOX CONTROLLERS
import troutbox from "../../assets/troutbox.png";
import dkbox from "../../assets/dkbox.png";
// LOGO
import testImg from "../../images/FPC.png";

const Portfolio = () => {

    return (
        <div className={styles['portfolio']}>
            <h1 className={styles['heading']}>Past Builds</h1>
            <div className={styles['grid']}>
                <div className={styles['grid-card']}>
                    <Image src={orange}/>
                    {/* <img src={orange} alt="" /> */}
                </div>
                <div className={styles['grid-card']}>
                    <Image src={blue_green}/>
                    {/* <img src={blue_green} alt="" /> */}
                </div>
                <div className={styles['grid-card']}>
                    <Image src={zombie}/>
                    {/* <img src={zombie} alt="" /> */}
                </div>
                <div className={styles['grid-card']}>
                    <Image src={pumpkin}/>
                    {/* <img src={pumpkin} alt="" /> */}
                </div>
                <div className={styles['grid-card']}>
                    <Image src={watermelon}/>
                    {/* <img src={watermelon} alt="" /> */}
                </div>
                <div className={styles['grid-card']}>
                    <Image src={turqoise}/>
                    {/* <img src={turqoise} alt="" /> */}
                </div>
                <div className={styles['grid-card']}>
                    <Image src={n64}/>
                    {/* <img src={n64} alt="" /> */}
                </div>
                
            </div>
            <h1 className={styles['heading']}>Resin Ware</h1>
            <div className={styles['grid']}>
                <div className={styles['grid-card']}>
                    <img src={sticks} alt="" />
                </div>
                <div className={styles['grid-card']}>
                    <img src={buttons} alt="" />
                </div>
                <div className={styles['grid-card']}>
                    <img src={buttons1} alt="" />
                </div>
                <div className={styles['grid-card']}>
                    <img src={buttons2} alt="" />
                </div>
                <div className={styles['grid-card']}>
                    <img src={plugcovers} alt="" />
                </div>
            </div>
            <h1 className={styles['heading']}>Box Controllers</h1>
            <div className={styles['grid']}>
                <div className={styles['grid-card']}>
                    <img src={troutbox} alt="" />
                </div>
                <div className={styles['grid-card']}>
                    <img src={dkbox} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
