import * as React from "react";
import {generateGrid} from "./helpers/generateGrid.ts";
import {useRef, useState} from "react";
import {Box} from "./components/Box.tsx";
import './styles/App.css'
import {rowColumnIncrement} from "./helpers/rowColumnIncrement.ts";


const App: React.FC = () => {
    const [grid, setGrid] = useState(generateGrid(10, 10))
    const [activeRow, setActiveRow] = useState<number | undefined>(undefined)
    const [activeColumn, setActiveColumn] = useState<number | undefined>(undefined)

    const clearTimerRef = useRef<number | null>(null);

    const clearActive = () => {
        setActiveRow(undefined);
        setActiveColumn(undefined);
    };

    const onCellClick = (rowIndex: number, columnIndex: number) => {
        if (clearTimerRef.current !== null) {
            window.clearTimeout(clearTimerRef.current);
            clearTimerRef.current = null;
        }
        const newGrid = rowColumnIncrement(rowIndex, columnIndex, grid)
        setActiveRow(rowIndex);
        setActiveColumn(columnIndex);
        setGrid(newGrid);
        clearTimerRef.current = window.setTimeout(() => {
            clearActive();
            clearTimerRef.current = null;
        }, 3000);
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
                                activeRow={activeRow}
                                activeColumn={activeColumn}
                            />
                        )
                    )
            )}
        </div>
    )
}

export default App;