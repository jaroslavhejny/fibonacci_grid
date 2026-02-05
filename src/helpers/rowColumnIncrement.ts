import type {Grid} from "../types/types.ts";

export const rowColumnIncrement = (row: number, column: number, grid: Grid) => {
    const newGrid = [...grid];
    for (const rowIndex in newGrid) {
        if (Number(rowIndex) === row) {
            const newRow = newGrid[rowIndex];
            for (const r in newRow) {
                newRow[r] = newRow[r] + 1;
            }
            newGrid[rowIndex] = newRow;
        } else {
            newGrid[rowIndex][column] = newGrid[rowIndex][column] + 1;
        }
    }
    return newGrid;
}
