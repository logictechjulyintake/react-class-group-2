import { useRef } from "react"

function UseRefEg() {

    const usernameRef = useRef(null)
    const buttonRef = useRef(null)

    function handleClick() {
        usernameRef.current.focus();
        buttonRef.current.style.backgroundColor = 'red'
    }

    return <>
        <input type="text" placeholder="Enter username..." ref={usernameRef} />

        <button ref={buttonRef} onClick={handleClick}>GO</button>
    </>
}

export default UseRefEg