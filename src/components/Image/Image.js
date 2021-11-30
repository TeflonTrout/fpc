import React, { useState } from 'react'
import { Skeleton } from '@mui/material'

const Image = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    setTimeout(() => {
        setIsLoading(true)
    }, 500);

    return (
        <>
            {isLoading ? <img src={props.src}/> : <Skeleton width={500} height={800} />}
        </>
    )
}

export default Image
