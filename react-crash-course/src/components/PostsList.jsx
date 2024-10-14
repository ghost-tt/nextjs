// import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import Post from "./Post";
import classes from './PostsList.module.css';

function PostsLists() {
    const posts = useLoaderData();

    return (
        <>
            {
                posts.length > 0 &&
                <ul className={classes.posts}>
                    {
                        posts.map((post) => <Post id={post.id} key={post.id} author={post.author} body={post.body} />)
                    }
                </ul>
            }
            {
                posts.length === 0 &&
                <div style={{ 'textAlign': 'center', 'color': 'white' }}>
                    <h2>There are no posts yet</h2>
                    <p>Start adding more</p>
                </div>
            }
        </>
    );
}

export default PostsLists;