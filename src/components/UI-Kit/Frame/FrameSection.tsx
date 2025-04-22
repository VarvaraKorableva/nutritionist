import './Frame.css'
import { ReactNode } from 'react'

type FrameDivProps = {
    children: ReactNode
}

function FrameSection({children}: FrameDivProps) {
    return(
        <div className='frameSection'>{children}</div>
    )
}

export default FrameSection