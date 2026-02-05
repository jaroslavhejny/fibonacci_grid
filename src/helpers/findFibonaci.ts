import type { Grid } from "../types/types";

export const keyOf = (r: number, c: number) => `${r},${c}`;

function isPerfectSquare(x: number) {
    const s = Math.floor(Math.sqrt(x));
    return s * s === x;
}

export function isFibonacci(n: number) {
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

function isConsecutiveFib5(values: number[]) {
    if (!values.every(isFibonacci)) return false;
    for (let i = 2; i < 5; i++) {
        if (values[i] !== values[i - 1] + values[i - 2]) return false;
    }
    return true;
}

export function findFib5FromChanged(grid: Grid, changed: Array<[number, number]>) {
    const rows = grid.length;
    const cols = grid[0].length;
    const hits = new Set<string>();

    const checkWindow = (coords: Array<[number, number]>) => {
        const vals = coords.map(([r, c]) => grid[r][c]);
        if (vals.some(v => v == null)) return;

        if (isConsecutiveFib5(vals as number[])) {
            coords.forEach(([r, c]) => hits.add(keyOf(r, c)));
        }
    };

    for (const [r, c] of changed) {
        for (let startC = c - 4; startC <= c; startC++) {
            if (startC < 0 || startC + 4 >= cols) continue;
            checkWindow([[r, startC],[r, startC+1],[r, startC+2],[r, startC+3],[r, startC+4]]);
        }

        for (let startR = r - 4; startR <= r; startR++) {
            if (startR < 0 || startR + 4 >= rows) continue;
            checkWindow([[startR, c],[startR+1, c],[startR+2, c],[startR+3, c],[startR+4, c]]);
        }
    }

    return Array.from(hits).map(s => s.split(",").map(Number) as [number, number]);
}
