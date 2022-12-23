import React from "react";
import { Link } from "react-router-dom";
export default function Science(props) {
    const posts = props.posts
    return(
    <>
        <h1>Science</h1>
        <div>
            {posts.map((post) => {
                if (post.postType.type === "Science") {
                return (
                <div className="break-words w-full max-w-xs lg:max-w-sm mt-10 mx-auto border-2 border-white" key={post.id}>
                <Link to={`/posts/${post.slug}`}>
                <div className='object-cover border-b-2 border-white'>
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
        </>
    )
}