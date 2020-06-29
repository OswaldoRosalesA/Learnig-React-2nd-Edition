import React from "react";
import {useInput} from '../../utils/Hooks';
import {useColors} from "./color-hooks";

const AddColorForm = () => {
    const [titleProps, resetTile] = useInput("");
    const [coloProps, resetColor] = useInput("#000000");
    const {addColor} = useColors();

    const submit = e => {
        e.preventDefault();
        addColor(titleProps.value, coloProps.value);
        resetTile();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input {...titleProps}
                   type="text"
                   placeholder="Color title..."
                   required/>
            <input {...coloProps}
                   type="color"
                   required/>
            <button>ADD</button>
        </form>
    );
};

export default AddColorForm;
