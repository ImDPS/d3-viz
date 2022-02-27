import React from 'react'

export const MouseOver = () => {
    
    return (
        <svg width={60} height={60} onMouseMove={onMouseMove}>
            <circle
                cx={30}
                cy={30}
                r="30"
                fill="Red"
                stroke="black"
                strokeWidth="1"
            />
        </svg>
    )
}