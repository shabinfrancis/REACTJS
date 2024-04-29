import { useState } from "react";

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);

    function toggleLike() {
        setIsLiked(!isLiked);
    }

    let likeColor = {color: "red"};
    return (
        <>
          <h1 onClick={toggleLike}>
            {
              isLiked ? <i style={likeColor} className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>  
            }
          </h1>
        </>
    )
}