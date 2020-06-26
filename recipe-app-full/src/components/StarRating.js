// ./src/components/StarRating.js

import React from "react";
import Star from "./Star";

const createArray = length => [...Array(length)];

const StarRating = ({style = {}, totalStars = 5, selectedStars = 0, onRate = f => f}) => {
    return (
        <div style={{padding: "5px", ...style}} className="star-rating">
            {
                createArray(totalStars).map((n, i) => {
                    return <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i + 1)}/>;
                })
            }

            <p>{selectedStars} of {totalStars} stars</p>
        </div>
    );
};

export default StarRating;