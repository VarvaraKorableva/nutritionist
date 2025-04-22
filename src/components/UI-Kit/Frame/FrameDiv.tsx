import './Frame.css'
import { ReactNode } from 'react'

type FrameDivProps = {
    children: ReactNode
    className?: string
}

function FrameDiv({children, className = ''}: FrameDivProps) {
    return(
        <div className={`frameDiv ${className}`}>{children}</div>
    )
}

export default FrameDiv