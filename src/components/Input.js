import React, { useState } from 'react'

function Input() {

    const [username, setUsername] = useState('')
    const [gender, setGender] = useState('male')

    return <>
        <input type='text' value={username} placeholder='Enter username...' onChange={e => setUsername(e.target.value)} />
        <select value={gender} onChange={e => setGender(e.target.value)}>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
        </select>

        <p>{username}</p>
        <p>{gender}</p>
    </>
}

export default Input