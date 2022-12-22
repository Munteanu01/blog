import React from 'react'
import DOMPurify from "dompurify";
export default function Home(props) {
    const posts = props.posts
    return(
        <div className='md:mx-32 mx-12 mt-20'>

            <div className='sm:grid gap-5 grid-cols-2 lg:grid-cols-3 lg:gap-3'>
            {posts.map((post) => (
            <div className="break-words w-full max-w-xs lg:max-w-sm mt-10 mx-auto border-2 border-white" key={post.id}>
                <div className='object-cover'><img className=' w-full' src={post.photo.url}></img></div>
                <h1 className='text-xl'>{post.title}</h1>
            </div>
            ))}
            </div>
        </div>
    )
}
//<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.html)}}></div>