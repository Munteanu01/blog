import React from "react";
import { Link } from "react-router-dom";
export default function Mind(props) {
    const posts = props.posts
    const filteredPosts = posts.filter(post => post.postType.type === "Mind")
    return(
        <div className='mx-auto px-5 md:px-0 xl:max-w-5xl lg:max-w-4xl md:max-w-2xl'>
            <h1 className='text-5xl my-14'>Mind</h1>
            <div className='sm:grid gap-7 grid-cols-2 text-center'>
            {filteredPosts.map((post) => (
                <div className={`mb-12 sm:mt-0 break-words w-full mx-auto 
                ${filteredPosts.length % 2 !== 0 && post === filteredPosts[filteredPosts.length-1] ? 'col-span-2 xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm' : ''}`} key={post.id}>
                <Link to={`/posts/${post.slug}`}>
                <div className='object-cover'><img className=' w-full' src={post.photo.url}></img></div>
                <h1 className='lg:text-3xl text-2xl pt-2'>{post.title}</h1>
                </Link>
                <p className='pt-1 text-xl'>{post.description}</p>
            </div>
                ))}
            </div>
        </div>
    )
}