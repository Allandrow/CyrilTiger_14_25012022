import { useEffect } from 'react'
import Dropdown from 'react-dropdown'
import { useOptions } from '../../hooks/useOptions'
import { HandleDropdownChange } from '../form/Form'

type SelectWrapperProps = {
  label: string
  name: string
  handler: HandleDropdownChange
  init: (value: string, name: string) => void
  content: string
  value: string
}

export const SelectWrapper = ({
  label,
  name,
  handler,
  init,
  content,
  value,
}: SelectWrapperProps) => {
  const { status, options, error } = useOptions(content)

  useEffect(() => {
    if (options && value === '') {
      init(name, options[0].label)
    }
  }, [options, value])

  if (error) {
    return (
      <label>
        <span>{label}</span>
        <Dropdown options={['Something went wrong']} disabled />
      </label>
    )
  }

  if (status === 'loading' || !options) {
    return (
      <label>
        <span>{label}</span>
        <Dropdown options={['Loading options…']} disabled />
      </label>
    )
  }

  return (
    <label>
      <span>{label}</span>
      <Dropdown
        options={options}
        onChange={(option) => handler(option.value, name)}
        value={value}
      />
    </label>
  )
}
