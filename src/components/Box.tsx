import * as React from "react";
import '../styles/box.css'

interface BoxProps {
    rowIndex: number;
    columnIndex: number;
}

export const Box: React.FC<BoxProps> = ({rowIndex, columnIndex}) => {
    return (
        <div className={'box'} key={`${rowIndex}-${columnIndex}`}>
            {rowIndex} - {columnIndex}
        </div>)
}
