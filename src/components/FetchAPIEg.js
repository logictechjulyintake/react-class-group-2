import { useRef } from "react";
import MyButton from "./MyButton";

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
        <MyButton name="Load Random User" onClick={getRandomUser} />

        <div className="bg-slate-200 p-4">
            <p className="font-bold mb-2" ref={userInfoRef}></p>
            <img className="rounded-sm" src={null} ref={userInfoImgRef} height={200} />
        </div>

    </>
}

export default FetchAPIEg