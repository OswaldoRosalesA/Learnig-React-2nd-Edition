import React from "react";
import {useInput} from '../../utils/Hooks';

const AddColorForm = ({onNewColor = f => f}) => {
    const [titleProps, resetTile] = useInput("");
    const [coloProps, resetColor] = useInput("#000000");

    const submit = e => {
        e.preventDefault();
        onNewColor(titleProps.value, coloProps.value);
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
