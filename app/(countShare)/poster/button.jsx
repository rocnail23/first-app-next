import { useState } from "react"



export default function Button() {

    const [like, setLike] = useState(true)

    const handleClick = () => {
        setLike(!like)
    }

    return (    

        <button onClick={handleClick}>
            {like ? "#" : "!!"}
        </button>

    )
}