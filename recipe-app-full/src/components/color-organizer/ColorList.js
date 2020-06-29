import React from "react";
import {useColors} from "./color-hooks";
import Color from "./Color";

const ColorList = () => {
    const {colors} = useColors();
    if (!colors.length) return <div>No Colors Listed</div>;
    return (
        <div>
            {colors.map((color, i) => (<Color key={i} {...color}/>))}
        </div>
    );
};

export default ColorList;