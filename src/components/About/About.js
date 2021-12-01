import React from 'react';
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles['about-page']}>
            <img className={styles['image']} src="https://i.ibb.co/Dw1rZ1N/Riptide.jpg" alt="" width={800}/>
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
                    <li>Digital Press Modifications</li>
                    <li>Custom Cables (see my collaboration with Fires Custom Controllers <a className={styles['link']} href='https://firescc.com/mod-guides#/diy-custom-cables' target='_blank' rel="noreferrer">here</a>)</li>
                    <li>LED Mods</li>
                </ul>
                <p>
                    Some of my more recent endeavors include resin casting pre-notched controllers that are 'Goomwave' compatible and ready for notch callibration,
                </p>
            </div>
            <img className={styles['image']} src="https://i.ibb.co/9pcNMWf/prenotch.jpg" alt="" width={800}/>
            <div className={styles['container']}>
                <p>As well as; resin casting custom GCC adapters, for you to add some flare to your setup.</p>
                <div className={styles['image-container']}>
                    <img className={styles['image']} src="https://i.ibb.co/4SLY31f/adapter1.jpg" alt="" />
                    <img className={styles['image']} src="https://i.ibb.co/fdRWp4x/adapter2.jpg" alt="" />
                </div>
            </div>
            <div className={styles['container']}>
                <h1 className={styles['heading']}>Experience</h1>
                <ul>
                    <li>3 Years of Resin Casting Experience</li>
                    <li>CGCC Discord Moderator</li>
                    <li>Riptide 2021 Vendor</li>
                </ul>
            </div>
        </div>
    )
}

export default About
