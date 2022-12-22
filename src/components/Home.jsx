import React from 'react'
import DOMPurify from "dompurify";
export default function Home(props) {
    const posts = props.posts
    return(
        <div className='mx-12'>
        <div className='mt-20 sm:grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            {posts.map((post) => (
            <div className="break-words w-3/4 px-5 h-60 mx-auto mt-5 border-2 sm:mx-2" key={post.id}>
                <div class="bg-no-repeat bg-center bg-cover bg-white h-full w-full" style={{ backgroundImage: `url(${post.photo.url})` }}></div>
                <div className='flex justify-between'>
                <h1 className=''>{post.title}</h1>
                <p>{post.date}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}
// <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.html)}}></div>