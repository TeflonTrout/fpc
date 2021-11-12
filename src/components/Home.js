import React from 'react'
import styles from "./Home.module.css";
import resinGuide from "../images/CGCC_Resin.png";

const Home = () => {
    return (
        <div className={styles["home-container"]}>
            <img src={resinGuide} alt="" width={500} height={500} />
        </div>
    )
}

export default Home
