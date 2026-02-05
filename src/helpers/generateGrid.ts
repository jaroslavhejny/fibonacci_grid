import type {Grid} from "../types/types.ts";

export const generateGrid = (rows: number, cols: number): Grid => {
    return Array.from({length: rows},
        () => Array.from({length: cols}, ()=>Math.floor(Math.random()*cols)))
}