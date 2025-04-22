import './Heading.css'
import { ReactNode } from 'react'

type HeadingProps = {
    children: ReactNode
}

function Heading({children} : HeadingProps) {
    return(
        <h2 className='heading'>{children}</h2>
    )
}

export default Heading