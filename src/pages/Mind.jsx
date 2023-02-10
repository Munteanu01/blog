import React from "react";
import FilteredPosts from "../components/FilteredPosts";
export default function Mind(props) {
    const posts = props.posts
    const readingTime = props.readingTime;
    const formatDate = props.formatDate;
    return(
        <FilteredPosts type="Mind" posts={posts} readingTime={readingTime} formatDate={formatDate} />
    )
}