import React from 'react'
import DOMPurify from "dompurify";
export default function Home(props) {
    const posts = props.posts
    return(
        <>
            {posts.map((post) => (
            <div className="max-w-sm" key={post.id}>
                <img src={post.photo.url}></img>
                <h1 className='text-4xl'>{post.title}</h1>
                <p>{post.date}</p>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.html)}}></div>
            </div>
            ))}
        </>
    )
}