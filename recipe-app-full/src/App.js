import React from 'react';
import ColorOrganizer from './components/color-organizer/ColorOrganizer'
import Menu from "./components/Menu";
import {ColorProvider} from "./components/color-organizer/color-hooks";

function App() {
    return (
        <div>
            <ColorProvider>
                <ColorOrganizer/>
            </ColorProvider>
            <Menu/>
        </div>
    );
}

export default App;
