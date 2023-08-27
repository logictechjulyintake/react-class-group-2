import React from 'react'
import './Post.css';

function Post(props) {
    return <>
        <div className="bg-green-100 p-10 m-5 rounded shadow-md">
            <h4 className='uppercase font-bold'>{props.title}</h4>
            <p className='break-all'>{props.body}</p>
            <button className="mt-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Read More</button>
        </div>
    </>
}

export default Post