import React from 'react';
import styles from './LiquidCableGuide.module.css';

const LiquidCableGuide = () => {
    return (
        <div className={styles['liquid-page']}>
            <h1 className={styles['heading']}>Liquid Cables</h1>
            <p>Fires, Luberry and I have collaborated on a guide that shows you how to create Gamecube cables entierly from scratch.</p>
            <p>Fires has a fantastic write up on his website which can be found here!</p>
            <a href="https://firescc.com/" target="_blank" rel="noreferrer">
                <img src="https://images.squarespace-cdn.com/content/v1/5c3d9d5c12b13fffd47d23bf/eeec1194-4c3b-4710-b35f-4508881a44f1/Artboard+1.png?format=1500w" alt="" width={200}/>
            </a>
            <p>I have created a video guide for all of you visual learners to follow!</p>
            <p>Don't hesitate to reach out with any questions you have.</p>
            <div className={styles['video-container']}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0bvWzYRTOhQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default LiquidCableGuide
