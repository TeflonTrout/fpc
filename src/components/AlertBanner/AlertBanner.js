import React, { useState } from 'react';
import styles from "./AlertBanner.module.css";

const AlertBanner = (props) => {
    const [alertOpen, setAlertOpen] = useState(true);

    function handleAlertClick() {
        setAlertOpen(prevState => !prevState);
    }

    return (
        <>
        {props.link ? 
            alertOpen ? <div className={styles['alert-box']} style={alertOpen ? {width: ''} : {width: '10%'}}>
                <div className={styles['icon']}  onClick={() => handleAlertClick()}>
                    !
                </div>
                <div className={styles['message']} >
                    <h2 className={styles['alert']}>
                    <a href={props.link} target="_blank" rel="noreferrer">
                        {props.text}
                    </a> 
                    </h2>
                </div> 
                <div className={styles['close-btn']} onClick={() => handleAlertClick()}>
                    X
                </div>
            </div> : ""
        :
        alertOpen ? <div className={styles['alert-box']} style={alertOpen ? {width: ''} : {width: '10%'}}>
            <div className={styles['icon']}  onClick={() => handleAlertClick()}>
                !
            </div>
            <div className={styles['message']} >
                <h2 className={styles['alert']}>
                {props.text}
                </h2>
            </div> 
            <div className={styles['close-btn']} onClick={() => handleAlertClick()}>
                X
            </div>
        </div> : ""}
        </>
    )
}

export default AlertBanner
