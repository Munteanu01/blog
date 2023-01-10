import React from "react";
import { Link } from "react-router-dom";
export default function Philosophy(props) {
    const posts = props.posts
    return(
    <div className="mx-auto xl:max-w-5xl lg:max-w-4xl md:max-w-2xl">
        <h1>Philosophy</h1>
        <div>
            {posts.map((post) => {
                if (post.postType.type === "Philosophy") {
                return (
                <div className="break-words w-full max-w-xs lg:max-w-sm mt-10 mx-auto" key={post.id}>
                <Link to={`/posts/${post.slug}`}>
                <div className='object-cover'>
                <img className=' w-full' src={post.photo.url}></img>
                </div>
                <h1 className='text-2xl pt-2 text-center'>{post.title}</h1>
                </Link>
                </div>
                );
                }
                return null;
            })}
        </div>
        </div>
    )
}