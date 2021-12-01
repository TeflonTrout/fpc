import React, { useState } from 'react'
import { Skeleton } from '@mui/material'
import styles from "./Image.module.css";

const Image = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    setTimeout(() => {
        setIsLoading(true)
    }, 1000);

    return (
        <>
            {isLoading ? <img className={styles['image']} src={props.src} alt="" /> : <Skeleton width={500} height={800} />}
        </>
    )
}

export default Image
