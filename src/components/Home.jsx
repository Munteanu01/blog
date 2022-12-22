import React from 'react'
import DOMPurify from "dompurify";
export default function Home(props) {
    const posts = props.posts
    return(
        <div className='mt-40 justify-between md:mx-40'>
            {posts.map((post) => (
            <div className="break-words max-w-md" key={post.id}>
                <div className='object-cover'><img className=' w-full' src={post.photo.url}></img></div>
                <h1 className='text-4xl'>{post.title}</h1>
                <p>{post.date}</p>
            </div>
            ))}
        </div>
    )
}
//<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.html)}}></div>