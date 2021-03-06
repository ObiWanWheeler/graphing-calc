import React from 'react';

export const BASE_GRIDLINE_COUNT = 30;
const GRIDLINE_COLOR = "#b0b0b0"
const DARKERLINE_COLOR = "grey";

export const Grid = ({ spacing, count=BASE_GRIDLINE_COUNT }) => {
    const gridlineWidth = spacing/(count * 20);

    const verticalLines = [];
    for (let i = -spacing; i < spacing; i+=spacing/count) {
        verticalLines.push(
            <line 
                key={`vertical-line-${i}`} x1={i} y1={-spacing} x2={i} y2={spacing} 
                stroke={verticalLines.length % 5 === 0 ? DARKERLINE_COLOR : GRIDLINE_COLOR} 
                strokeWidth={gridlineWidth}
            />
        );
    }

    const horizontalLines = [];
    for (let i = -spacing; i < spacing; i+=spacing/count) {
        horizontalLines.push(
            <line 
                key={`horizontal-line-${i}`} x1={-spacing} y1={i} x2={spacing} y2={i} 
                stroke={horizontalLines.length % 5 === 0 ? DARKERLINE_COLOR : GRIDLINE_COLOR} 
                strokeWidth={gridlineWidth} 
            />
        );
    }

    return (
        <g className="grid">
            {verticalLines}
            {horizontalLines}
        </g>
    )
}
