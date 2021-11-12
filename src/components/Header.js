import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles['header']}>
            <Link to="/">
                <h1 className={styles['link']}>Home</h1>
            </Link>
            <Link to="/about">
                <h1 className={styles['link']}>About</h1>
            </Link>
            <Link to="/guides">
                <h1 className={styles['link']}>Guides</h1>
            </Link>
        </div>
    )
}

export default Header
