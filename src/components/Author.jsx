import React from "react";
import { Link, useParams } from "react-router-dom";
export default function Post(props) {
    const {slug} = useParams()
    const posts = props.posts
    const author = posts.find(post => post.author.slug === slug);
    const postIds = author.author.posts.map(post => post.id);
    return(
        <div>
        <h1 className="text-4xl">{author.author.name}</h1>
        {posts.map((post) => {
            if (postIds.includes(post.id)) {
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
    )
}