import React from "react";
import Color from "./Color";

const ColorList = ({colors = [], onRemoveColor = f => f, onRateColor = f => f}) => {
    if (!colors.length) return <div>No Colors Listed</div>;
    return (
        <div>
            {colors.map((color, i) => (<Color key={i} onRemove={onRemoveColor} {...color} onRate={onRateColor}/>))}
        </div>
    );
};

export default ColorList;