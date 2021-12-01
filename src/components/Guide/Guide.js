import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Guide.module.css";

const Guide = () => {
    return (
        <div className={styles['guide-page']}>
            <h1>Mod Guides</h1>
            <div className={styles['container']}>
                <ul>
                    <h2>
                        <Link className={styles['link']} to="/guide/resin">- Resin Options Guide</Link>
                    </h2>
                    <h2>
                        <Link className={styles['link']} to="/guide/liquid">- Liquid Cables</Link>
                    </h2>
                </ul>
            </div>
        </div>
    )
}

export default Guide
