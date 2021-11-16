import React from 'react'
import styles from "./Home.module.css";
import Logo from "../images/FPC.png"

const Home = () => {
    return (
        <div className={styles["home-container"]}>
           <img src={Logo} alt="" width={500}/>
        </div>
    )
}

export default Home
