import * as React from "react";
import {generateGrid} from "./helpers/generateGrid.ts";
import {useState} from "react";
import {Box} from "./components/Box.tsx";
import './styles/App.css'


const App: React.FC = () => {
    const [grid, setGrid] = useState(generateGrid(7, 7))
    const onCellClick = (rowIndex: number, cellIndex: number) => {
        const newGrid = [...grid];
        newGrid[rowIndex][cellIndex] = newGrid[rowIndex][cellIndex]+1;
        console.log(newGrid);
        setGrid(newGrid);

    }
    return (
        <div className={'grid'}>
            {grid.map(
                (row, rowIndex) =>
                    row.map(
                        (_, columnIndex) => (
                            <Box
                                rowIndex={rowIndex}
                                columnIndex={columnIndex}
                                onCellClick={onCellClick}
                                value={grid[rowIndex][columnIndex]}
                                key={`${rowIndex}-${columnIndex}`}
                            />
                        )
                    )
            )}
        </div>
    )
}

export default App;