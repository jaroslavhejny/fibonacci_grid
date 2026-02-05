import * as React from "react";
import {generateGrid} from "./helpers/generateGrid.ts";
import {useState} from "react";
import {Box} from "./components/Box.tsx";


const App: React.FC = () => {
    const [grid, _] = useState(generateGrid(7, 7))
    return (
        <div>
            {grid.map((row, rowIndex) =>
                row.map((_, columnIdex) => (
                    <Box rowIndex={rowIndex} columnIndex={columnIdex}/>
                )))}
        </div>
    )
}

export default App;