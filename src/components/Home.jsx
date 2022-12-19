import React from 'react'
export default function Home(props) {
    const posts = props.posts
    return(
        <>
            {posts.map((post) => (
            <div key={post.id}>
                <h1 className='text-4xl'>{post.title}</h1>
                <p>{post.date}</p>
            </div>
            ))}
        </>
    )
}