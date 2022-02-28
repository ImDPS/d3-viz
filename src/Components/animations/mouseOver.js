import React, { useState, useCallback } from 'react'

export const MouseOver = () => {

    const width = 960;
    const height = 500;

    const initialMousePosition = {
        x: width/2,
        y: height/2
    }

    const [mousePosition, setMousePosition] = useState(initialMousePosition);

    const handleMouseMove = useCallback(
        (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY
            });
        },
        [setMousePosition]
    );

    return (
        <svg width={width} height={height} onMouseMove={handleMouseMove}>
            <circle
                cx={mousePosition.x}
                cy={mousePosition.y}
                r="30"
                fill="Red"
                stroke="black"
                strokeWidth="1"
            />
        </svg>
    )
}