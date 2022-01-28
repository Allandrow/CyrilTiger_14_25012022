import { FormEvent } from 'react'

interface InputWrapperProps {
  label: string
  type?: string
  name: string
  placeholder?: string
  handler: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export const InputWrapper = ({
  label,
  type = 'text',
  name,
  placeholder = '',
  handler,
}: InputWrapperProps) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handler}
      />
    </label>
  )
}
