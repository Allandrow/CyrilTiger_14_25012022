import { FormEvent } from 'react'

type InputWrapperProps = {
  label: string
  type?: string
  name: string
  value: string
  placeholder?: string
  handler: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export const InputWrapper = ({
  label,
  type = 'text',
  name,
  value,
  placeholder = '',
  handler,
}: InputWrapperProps) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handler}
      />
    </label>
  )
}
