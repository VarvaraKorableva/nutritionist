import './Container.css'
import { ReactNode, ElementType } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  baseClassName?: 'container' | 'wrapper'
}

export default function Container({
  children,
  className = '',
  as: Tag = 'section',
  baseClassName = 'container',
}: ContainerProps) {
  return <Tag className={`${baseClassName} ${className}`}>{children}</Tag>
}