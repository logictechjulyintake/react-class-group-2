import React from 'react'

// props
function MyButton({ name }) {
    return <>
        <button className="bg-slate-200 px-4 py-2 rounded-sm m-2 font-bold">{name}</button>
    </>
}

export default MyButton