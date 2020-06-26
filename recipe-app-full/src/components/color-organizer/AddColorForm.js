import React, {useState} from "react";

const AddColorForm = ({onNewColor = f => f}) => {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = e => {
        e.preventDefault();
        onNewColor(title, color);
        setTitle("");
        setColor("");
    };

    return (
        <form onSubmit={submit}>
            <input value={title}
                   onChange={evt => setTitle(evt.target.value)}
                   type="text"
                   placeholder="Color title..."
                   required/>
            <input value={color}
                   onChange={evt => setColor(evt.target.value)}
                   type="color"
                   required/>
            <button>ADD</button>
        </form>
    );
};

export default AddColorForm;
