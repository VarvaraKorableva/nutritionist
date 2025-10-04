import './Container.css'
import { ElementType, forwardRef } from 'react'

type ContainerProps = {
  children?: React.ReactNode
  className?: string
  as?: ElementType
  baseClassName?: 'container' | 'wrapper'
} & React.HTMLAttributes<HTMLElement>

// Используем forwardRef, чтобы можно было пробросить ref
const Container = forwardRef<HTMLElement, ContainerProps>(function Container(
  { children, className = '', as: Tag = 'section', baseClassName = 'container' },
  ref
) {
  return (
    <Tag ref={ref} className={`${baseClassName} ${className}`}>
      {children}
    </Tag>
  )
})

export default Container
