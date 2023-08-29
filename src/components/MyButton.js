import React from 'react'

// props
function MyButton(props) {
    return <>
        <button {...props} className="bg-slate-200 px-4 py-2 rounded-sm m-2 font-bold">{props.name}</button>
    </>
}

export default MyButton