"use client"

import { Fragment, useState } from "react"

export default function Count(){

    const  [count, setCount] = useState(1)

    const handleClick = () => {
        setCount(count +  1)
    }

    return (

        <Fragment>
            <p>{count}</p>
            <button onClick={handleClick}>
                sumar
                </button>
        </Fragment>

    )


}