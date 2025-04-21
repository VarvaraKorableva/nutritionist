import './Frame.css'

function FrameDiv({children, className = ''}) {
    return(
        <div className={`frameDiv ${className}`}>{children}</div>
    )
}

export default FrameDiv