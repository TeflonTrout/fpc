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
            <div className={alertOpen ? styles['alert-box-open'] : styles['alert-box-closed']} >
                {alertOpen ? 
                <>
                    <div className={styles['icon']}  onClick={() => handleAlertClick()}>
                        !
                    </div>
                    <div className={styles['message']} >
                        <div className={styles["alert-container"]}>
                            <h2 className={styles['alert']}>
                                <a href={props.link} target="_blank" rel="noreferrer">
                                    {props.text}
                                </a> 
                            </h2>
                        </div>
                    </div> 
                    <div className={styles['close-btn']} onClick={() => handleAlertClick()}>
                        X
                    </div>
                </>
                : ""}
            </div>
        :
       <div className={alertOpen ? styles['alert-box-open'] : styles['alert-box-closed']} style={alertOpen ? {width: ''} : {width: '10%'}}>
           {alertOpen ? 
            <>
                <div className={styles['icon']}  onClick={() => handleAlertClick()}>
                    !
                </div>
                <div className={styles['message']} >
                    <div className={styles["alert-container"]}>
                        <h2 className={styles['alert']}>
                            {props.text}
                        </h2>
                    </div>
                </div> 
                <div className={styles['close-btn']} onClick={() => handleAlertClick()}>
                    X
                </div>
            </> : ""}
        </div> }
        </>
    )
}

export default AlertBanner
