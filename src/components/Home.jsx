import React from 'react'
import MyButton from './MyButton'
import { Link } from 'react-router-dom'

function Home() {
    return <>
        <Link to="/posts" >
            <MyButton name="Fetch API Example" />
        </Link>
    </>
}

export default Home