import React, {useState} from "react";
import colorData from '../../data/color-data.json';
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
import { v4 } from "uuid";


const ColorOrganizer = () => {
    const [colors, setColors] = useState(colorData);
    return (
        <div>
            <AddColorForm onNewColor={(title, color) => setColors([...colors, {id: v4(), title, color, rating: 0}])}/>
            <ColorList
                colors={colors}
                onRemoveColor={id => setColors(colors.filter(color => color.id !== id))}
                onRateColor={(id, rating) => setColors(colors.map(color => color.id === id ? { ...color, rating } : color))}
            />
        </div>
    );

}

export default ColorOrganizer;