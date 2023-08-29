import React from 'react'
import MyButton from './MyButton'
import { Link } from 'react-router-dom'

function Home() {
    return <>
        <div className='flex'>
            <Link to="/" >
                <MyButton name="Home" />
            </Link>
            <Link to="/posts" >
                <MyButton name="Fetch API Example" />
            </Link>
            <Link to="/form" >
                <MyButton name="My form" />
            </Link>
            <Link to="/featch" >
                <MyButton name="Featch Api Eg 2" />
            </Link>
            <Link to="/map" >
                <MyButton name="Map Example" />
            </Link>
            <Link to="/card" >
                <MyButton name="MY CARD" />
            </Link>
        </div>
    </>
}

export default Home