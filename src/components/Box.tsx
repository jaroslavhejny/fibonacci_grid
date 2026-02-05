import * as React from "react";
import '../styles/box.css'

interface BoxProps {
    rowIndex: number;
    columnIndex: number;
    onCellClick: (rowIndex: number, cellIndex: number) => void;
    value: number | null;
    activeRow?: number;
    activeColumn?: number;
}

export const Box: React.FC<BoxProps> = ({
                                            rowIndex,
                                            columnIndex,
                                            onCellClick,
                                            value,
                                            activeRow,
                                            activeColumn
                                        }: BoxProps) => {
    const active = rowIndex === activeRow || columnIndex === activeColumn;

    return (
        <div className={`box ${active ? 'yellow' : ''}`} onClick={() => onCellClick(rowIndex, columnIndex)}>
            {value}
        </div>)
}
