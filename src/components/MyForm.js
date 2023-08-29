import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext';

function MyForm() {

    const { user, setUser } = useContext(UserContext)

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

        setMessage("");

        setUser({
            name: formJson.username
        });
    }

    return <>
        <div className="w-full">
            <form onSubmit={handleForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="******************" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                </div>
                <p className="text-center text-gray-500 text-xs">
                    {message}
                </p>
            </form>

        </div>

    </>
}

export default MyForm