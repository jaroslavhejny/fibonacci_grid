import * as React from "react";
import '../styles/box.css'

interface BoxProps {
    rowIndex: number;
    columnIndex: number;
    onCellClick: (rowIndex: number, cellIndex: number) => void;
    value: number | null;
    isActive?: boolean;
    isFibonacci?: boolean;
}

export const Box: React.FC<BoxProps> = ({
                                            rowIndex,
                                            columnIndex,
                                            onCellClick,
                                            value,
                                            isFibonacci,
                                            isActive,
                                        }: BoxProps) => {

    return (
        <div className={`box ${isFibonacci ? 'green' : isActive ? 'yellow' : ''}`}
             onClick={() => onCellClick(rowIndex, columnIndex)}>
            {value}
        </div>)
}
