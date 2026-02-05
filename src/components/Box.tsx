import * as React from "react";

interface BoxProps {
    rowIndex: number;
    columnIndex: number;
}

export const Box: React.FC<BoxProps> = ({rowIndex, columnIndex}) => {
    return <div>{rowIndex} - {columnIndex}</div>
}
