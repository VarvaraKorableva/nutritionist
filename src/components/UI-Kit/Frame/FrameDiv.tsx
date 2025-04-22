import './Frame.css'
import { ReactNode } from 'react'

function FrameDiv({children, className = ''}) {
    return(
        <div className={`frameDiv ${className}`}>{children}</div>
    )
}

export default FrameDiv