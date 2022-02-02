import { InputWrapperProps } from '../../data/types'

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
