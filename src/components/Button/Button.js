import React from 'react';

import styles from "./Button.module.css";

const Button = (props) => {
    const width = props.width;
    return (
        <div className={styles[`${props.color}`]} style={{width: `${width}vw`}}>
            <h3 className={styles["button-text"]}>{props.text.toUpperCase()}</h3>
        </div>
    )
}

export default Button
