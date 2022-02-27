import React from 'react'
import { Face } from './Blocks/Face'
import { range } from 'd3-array'
 
export const SmileyFace = () => {
    
    const width = 320;
    const height = 320;

    const array = range(5);

    return(
        <div style={{ display: "flex", flexDirection: "row", margin: 0 }}>
            {array.map((d, i) => {
                    return (
                        <div key={i}>
                            <Face
                                width={width}
                                height={height}
                                strokeWidth={5}
                                eyeOffsetX={30 + Math.random() * 9}
                                eyeOffsetY={30 + Math.random() * 9}
                                eyeRadius={10 + Math.random() * 9}
                                mouthWidth={10 + Math.random() * 9}
                                mouthRadius={40 + Math.random() * 9}
                            />
                        </div>
                    )
                }
            )}
        </div>
    )
}
