import * as React from "react";
import {generateGrid} from "./helpers/generateGrid.ts";
import {useState} from "react";
import {Box} from "./components/Box.tsx";
import './styles/App.css'


const App: React.FC = () => {
    const [grid, _] = useState(generateGrid(7, 7))
    return (
        <div className={'grid'}>
            {grid.map(
                (row, rowIndex) =>
                    row.map(
                        (_, columnIndex) => (
                            <Box rowIndex={rowIndex} columnIndex={columnIndex}/>
                        )
                    )
            )}
        </div>
    )
}

export default App;