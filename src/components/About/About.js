import React, { useEffect } from 'react';
import styles from "./About.module.css";

const About = () => {
    useEffect(() => {
        document.querySelector("body").scrollTo(0,0)
    }, [])

    return (
        <div className={styles['about-page']}>
            <img className={styles['image']} src="https://i.ibb.co/Dw1rZ1N/Riptide.jpg" alt="" width={800} style={{marginTop: '20px'}}/>
            <div className={styles['container']}>
                <h1 className={styles['heading']}>Experience</h1>
                <h3>With over 5 Years of Resin Casting Experience I've had the opportunity to be a part of the following events:</h3>
                <div className={styles['list']}>
                    <ul>
                        <li>Riptide 2021</li>
                        <li>Genesis 8</li>
                        <li>Double Down 2022</li>
                        <li>The Big House 10</li>
                        <li>Genesis 9</li>
                        <li>GOML 2023</li>
                        <li>Super Smash Con 2023</li>
                    </ul>
                    <ul>
                        <li>Riptide 2023</li>
                        <li>The Big House 11</li>
                        <li>Port Priority 8</li>
                        <li>Genesis X</li>
                        <li>GOML X</li>
                        <li>Supernova 2024</li>
                    </ul>
                </div>
            </div>
            <div className={styles['container']}>
                <h1 className={styles['heading']}>About Me</h1>
                <p>Hey, thanks for stopping by! My name is TeflonTrout (Teflon, Trout, or JT is fine) and I'm the founder and CEO of
                    Frame Perfect Controllers. My journey into Custom Gamecube Controllers began back in 2018 when I stumbled upon the CGCC discord
                    server while scouring the internet for notching tips/tricks. 
                </p>
                <p>I instantly fell in love with the community and I never looked back.
                    Since then, I've learned as much as I can about modding GCCs and I consider myself a maverick when it comes to controllers.
                    I am knowledgeable of most mods but my specialty is resin casting. In my 3 years of resin casting I've created parts ranging
                    from simple buttons all the way to custom resin GCC shells, GCC adapters, and even trigger brackets!
                </p>
                <p>While I do specialize in resin casting I'm also proficient with functional mods including:</p>
                <ul>
                    <li>Anti-Snapback Modules</li>
                    <li>Phob Modifications</li>
                    <li>Mouse Click Z</li>
                    <li>Custom Cables (see my collaboration with Fires Custom Controllers <a className={styles['link']} href='https://firescc.com/mod-guides#/diy-custom-cables' target='_blank' rel="noreferrer">here</a>)</li>
                    <li>LED Mods</li>
                </ul>
                <p>
                    Some of my more recent endeavors include resin casting pre-notched controllers that are Phob compatible and ready for notch calibration.
                </p>
            </div>
            <img className={styles['image']} src="https://i.imgur.com/ZG4DJls.jpg" alt="" width={800}/>
            <div className={styles['container']}>
                <p>As well as, resin casting custom GCC adapters, for you to add some flare to your setup.</p>
                <div className={styles['image-container']}>
                    <img className={styles['image']} src="https://i.imgur.com/NlAKvNG.jpg" alt="" />
                    <img className={styles['image']} src="https://i.imgur.com/Qm2kSvM.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
