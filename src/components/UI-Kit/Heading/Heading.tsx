import './Heading.css'
import { ReactNode } from 'react'

type HeadingProps = {
    children: ReactNode
    className?: string
}

function Heading({ children, className }: HeadingProps) {
    return (
        <h2 className={`heading${className ? ' ' + className : ''}`}>
            {children}
        </h2>
    )
}

export default Heading
