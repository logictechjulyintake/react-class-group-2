import { useState } from "react"

function Button() {

    const [count, setCount] = useState(0)

    function clickMe() {
        setCount(count + 1)
    }

    return <>
        <button onClick={clickMe}>Update Counter {count}</button>
        <p>{count}</p>
        {count}
    </>
}

export default Button