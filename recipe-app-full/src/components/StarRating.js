// ./src/components/StarRating.js

import React, {useState} from "react";
import Star from "./Star";

const createArray = length => [...Array(length)];

const StarRating = ({style = {}, totalStars = 5, ...props}) => {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
        <div style={{padding: "5px", ...style}} {...props} className="star-rating">
            {
                createArray(totalStars).map((n, i) => {
                    return <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)}/>;
                })
            }

            <p>{selectedStars} of {totalStars} stars</p>
        </div>
    );
};

export default StarRating;