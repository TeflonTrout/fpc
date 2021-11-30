import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles['footer']}>
            <h1><Link className={styles['heading']} to='/'>FRAME PERFECT CONTROLLERS</Link></h1>
            <div className={styles['container']}>
                <Link className={styles['link']} to="/">HOME</Link>
                <Link className={styles['link']} to="/portfolio">PORTFOLIO</Link>
                <Link className={styles['link']} to="/about">ABOUT</Link>
            </div>
            <div className={styles['container']}>
                <Link className={styles['link']} to="/guide">GUIDE</Link>
                <a href="https://customg.cc/" className={styles['external-link']} target='_blank' rel="noreferrer">CGCC</a>
            </div>
            <div className={styles['container']}>
                <Link className={styles['link']} to="/guide">TWITTER</Link>
                <Link className={styles['link']} to="/">SHOP</Link>
            </div>
        </div>
    )
}

export default Footer
