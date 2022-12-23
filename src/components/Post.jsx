import React from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
export default function Post(props) {
    const {slug} = useParams()
    const posts = props.posts
    const post = posts.find(post => post.slug === slug);
    return(
        <div className="max-w-lg mx-auto pt-20">
        <h1>This is {post.title}</h1>
        <img src={post.photo.url} alt="" />
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.html)}}></div>
        </div>
    )
}