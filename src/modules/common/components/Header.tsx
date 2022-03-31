import { ReactNode } from 'react'

interface HeaderProps {
  children?: ReactNode
  title: string
}

export const Header = ({ title, children }: HeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  )
}
