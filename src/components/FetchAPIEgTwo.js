import React, { useEffect, useState } from 'react'
import Post from './Post';

function FetchAPIEgTwo() {

    const [posts, setPosts] = useState([])

    useEffect(function () {
        async function getAllPosts() {
            const response = await fetch(`${process.env.REACT_APP_POSTS_API_BASE_URL}/posts`, {
                method: "GET"
            });
            const responseJson = await response.json();
            console.log(responseJson);
            setPosts(responseJson);
        }
        getAllPosts();
    }, []);

    return <>
        {posts ? posts.map(function (post) {
            return <Post {...post} />
        }) : "No posts yet!"}
    </>
}

export default FetchAPIEgTwo