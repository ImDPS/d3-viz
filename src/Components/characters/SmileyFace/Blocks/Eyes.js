export const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }) => {
    return(
        <>
            <circle
                    cx={-eyeOffsetX}
                    cy={-eyeOffsetY}
                    r="20"
                    fill="black"
                    stroke="black"
                    strokeWidth="1"
                />
                <circle
                    cx={eyeOffsetX}
                    cy={-eyeOffsetY}
                    r="20"
                    fill="black"
                    stroke="black"
                    strokeWidth="1"
                />
        </>
            
    )
}