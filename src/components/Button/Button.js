import React from 'react';

import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <div className={styles[`${props.color}`]}>
            <h3>{props.text.toUpperCase()}</h3>
        </div>
    )
}

export default Button
