import React from "react";
import { useParams } from "react-router-dom";
export default function Post() {
    const {slug} = useParams()
    return(
        <h1>This is {slug}</h1>
    )
}