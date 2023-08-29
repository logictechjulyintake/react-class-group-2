import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import MyForm from './MyForm'

function Home() {

    const { user, setUser } = useContext(UserContext)

    return <>
        Currently logged in user: {user ? user.name : "Please login using My Form!"}
    </>
}

export default Home