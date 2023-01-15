import React from "react";
import FilteredPosts from './FilteredPosts';
export default function Philosophy(props) {
    const posts = props.posts
    const readingTime = props.readingTime;
    const formatDate = props.formatDate;
    return(
        <FilteredPosts type="Philosophy" posts={posts} readingTime={readingTime} formatDate={formatDate}/>
    )
}