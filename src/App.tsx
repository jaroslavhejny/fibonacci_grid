import * as React from "react";
import './styles/App.css'
import {generateGrid} from "./helpers/generateGrid.ts";
import {useRef, useState} from "react";
import {Box} from "./components/Box.tsx";
import {rowColumnIncrement} from "./helpers/rowColumnIncrement.ts";
import {findFib5FromChanged, keyOf} from "./helpers/findFibonaci.ts";


const App: React.FC = () => {
    const [grid, setGrid] = useState(generateGrid(50, 50))
    const [activeRow, setActiveRow] = useState<number | undefined>(undefined)
    const [activeColumn, setActiveColumn] = useState<number | undefined>(undefined)

    const [greenCells, setGreenCells] = useState<Set<string>>(new Set());
    const greenTimerRef = useRef<number | null>(null);

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
        if (greenTimerRef.current !== null) {
            window.clearTimeout(greenTimerRef.current);
            greenTimerRef.current = null;
        }

        setGreenCells(new Set());
        setActiveRow(rowIndex);
        setActiveColumn(columnIndex);
        setGrid(prevGrid => {
            const newGrid = rowColumnIncrement(rowIndex, columnIndex, prevGrid);

            const changed: Array<[number, number]> = [];
            const rows = newGrid.length;
            const cols = newGrid[0].length;

            for (let c = 0; c < cols; c++) changed.push([rowIndex, c]);
            for (let r = 0; r < rows; r++) if (r !== rowIndex) changed.push([r, columnIndex]);

            const hits = findFib5FromChanged(newGrid, changed);
            if (hits.length > 0) {
                const green = new Set(hits.map(([r,c]) => keyOf(r,c)));
                setGreenCells(green);

                greenTimerRef.current = window.setTimeout(() => {
                    setGrid(prev => {
                        const copy = prev.map(r => r.slice());
                        hits.forEach(([r,c]) => (copy[r][c] = 1));
                        return copy;
                    });
                    setGreenCells(new Set());
                    greenTimerRef.current = null;
                }, 3000);
            }
            return newGrid;
        });
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
                                isActive={rowIndex === activeRow || columnIndex === activeColumn}
                                isFibonacci={greenCells.has(`${rowIndex},${columnIndex}`)}
                            />
                        )
                    )
            )}
        </div>
    )
}

export default App;