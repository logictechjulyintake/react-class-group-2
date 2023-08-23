import React from 'react'

// props
function MyButton({ name, test }) {
    return <>
        <button>{name}</button>
        {test}
    </>
}

export default MyButton