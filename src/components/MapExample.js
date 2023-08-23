const users = [
    { name: 'Ramesh' },
    { name: 'Bhawana' },
    { name: 'Sandesh' },
    { name: "Biren" },
    { name: "NA :)" },
]

const usersList = users.map(function (user) {
    return <li>
        {user.name}
    </li>
})

function MapExample() {
    return <>
        <ul>
            {usersList}
        </ul>
    </>
}

export default MapExample