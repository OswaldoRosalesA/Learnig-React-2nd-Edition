import React from "react";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";

const ColorOrganizer = () => {
    return (
        <div>
            <AddColorForm/>
            <ColorList/>
        </div>
    );
}

export default ColorOrganizer;