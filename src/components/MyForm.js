import React, { useState } from 'react'

function MyForm() {

    const [message, setMessage] = useState('')

    function handleForm(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        if (formJson.username.trim().length === 0 || formJson.password.trim().length === 0) {
            setMessage("Duitai lekhna parcha!")
            return;
        }

        if (formJson.username.length < 7) {
            setMessage("Username dherai sano vayo!")
            return;
        }

        setMessage("Sabai thik cha!")

    }

    return <>
        <form onSubmit={handleForm}>

            <input type='text' placeholder='Enter username...' name='username' />

            <input type='password' placeholder='Enter password...' name='password' />
            <select name='gender'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>

            <button type='submit'>Go</button>

            <p>{message}</p>

        </form>
    </>
}

export default MyForm