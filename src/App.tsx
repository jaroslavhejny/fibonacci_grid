import * as React from "react";
import {generateGrid} from "./helpers/generateGrid.ts";
import {useState} from "react";
import {Box} from "./components/Box.tsx";
import './styles/App.css'
import {rowColumnIncrement} from "./helpers/rowColumnIncrement.ts";


const App: React.FC = () => {
    const [grid, setGrid] = useState(generateGrid(10, 10))
    const onCellClick = (rowIndex: number, columnIndex: number) => {
        const newGrid = rowColumnIncrement(rowIndex, columnIndex, grid)
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