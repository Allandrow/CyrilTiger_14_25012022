import { ReactNode } from 'react'

interface InputLabelProps {
  label: string
  children: ReactNode
}

export const InputLabel = ({ label, children }: InputLabelProps) => {
  return (
    <label>
      <span>{label}</span>
      {children}
    </label>
  )
}
