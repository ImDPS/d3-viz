import { BackgroundCircle } from './BackgroundCircle'
import { Eyes } from './Eyes'
import { Mouth } from './Mouth'
import { FaceContainer } from './FaceContainer'

export const Face = ({
    width,
    height,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius,
    mouthWidth,
    mouthRadius
}) => {
    const centerX = width / 2;
    const centerY = height / 2;
    return(
        <FaceContainer
            width={width}
            height={height}
            centerX={centerX}
            centerY={centerY}
        >
            <BackgroundCircle
                radius={(centerY - strokeWidth) / 2} 
                strokeWidth={strokeWidth}
            />
            <Eyes
                eyeOffsetX={eyeOffsetX}
                eyeOffsetY={eyeOffsetY}
                eyeRadius={eyeRadius}
            />
            <Mouth
                mouthRadius={mouthRadius}
                mouthWidth={mouthWidth}
            />
        </FaceContainer>
    )
}