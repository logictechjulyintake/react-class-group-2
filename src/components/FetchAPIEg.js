import { useRef } from "react";

function FetchAPIEg() {

    const userInfoRef = useRef(null)
    const userInfoImgRef = useRef(null)

    async function getRandomUser() {
        userInfoRef.current.innerText = 'Loading...'
        const response = await fetch('https://randomuser.me/api/', {
            method: "GET"
        });
        const responseJson = await response.json();
        const userInfo = responseJson.results[0]
        // console.log(userInfo)
        userInfoRef.current.innerText = userInfo.name.first + ' ' + userInfo.name.last
        userInfoImgRef.current.src = userInfo.picture.large
    }

    return <>
        <button onClick={getRandomUser}>Load Random User</button>

        <p ref={userInfoRef}></p>
        <img src={null} ref={userInfoImgRef} height={200} />

    </>
}

export default FetchAPIEg