import * as React from "react";
import '../styles/box.css'

interface BoxProps {
    rowIndex: number;
    columnIndex: number;
    onCellClick: (rowIndex: number, cellIndex: number) => void;
    value: number | null;
}

export const Box: React.FC<BoxProps> = ({rowIndex, columnIndex, onCellClick, value}: BoxProps) => {
    return (
        <div className={'box'} onClick={() => onCellClick(rowIndex, columnIndex)}>
            {value}
        </div>)
}
