import React, { useState } from 'react';
import styles from "./AlertBanner.module.css";

const AlertBanner = () => {
    const [alertOpen, setAlertOpen] = useState(true);

    function handleAlertClick() {
        setAlertOpen(prevState => !prevState);
    }

    return (
        <>
        {alertOpen ?<div className={styles['alert-box']} style={alertOpen ? {width: ''} : {width: '10%'}}>
            <div className={styles['close-btn']} onClick={() => handleAlertClick()}>
                X
            </div>
            <div className={styles['icon']}  onClick={() => handleAlertClick()}>
                !
            </div>
            <div className={styles['message']} >
                <h2 className={styles['alert']}>
                    Riptde 2021 was a huge success! Thank you to everybody who stopped by. Hopefully I'll see you all at Genesis 8!
                </h2>
            </div> 
        </div> : ""}
        </>
    )
}

export default AlertBanner
