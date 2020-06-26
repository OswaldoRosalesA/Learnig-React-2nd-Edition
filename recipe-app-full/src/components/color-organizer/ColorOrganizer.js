import React, {useState} from "react";
import colorData from '../../data/color-data.json';
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";


const ColorOrganizer = () => {
    const [colors, setColors] = useState(colorData);
    return (
        <div>
            <AddColorForm onNewColor={(title, color) => alert(`${title} ${color}`)}/>
            <ColorList
                colors={colors}
                onRemoveColor={id => setColors(colors.filter(color => color.id !== id))}
                onRateColor={(id, rating) => setColors(colors.map(color => color.id === id ? { ...color, rating } : color))}
            />
        </div>
    );

}

export default ColorOrganizer;