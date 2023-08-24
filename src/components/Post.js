import React from 'react'
import './Post.css';

function Post(props) {
    return <>
        <div className='post'>
            <h4>{props.title}</h4>
            <pre>{props.body}</pre>
        </div>
    </>
}

export default Post