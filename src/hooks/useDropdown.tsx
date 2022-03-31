import { useEffect } from 'react'
import { UpdateField } from 'types'
import { useOptions } from './useOptions'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

interface DropDownProps {
  name: string
  value: string
  handler: UpdateField
}

export const useDropdown = ({ name, value, handler }: DropDownProps) => {
  const type = `${name}s`
  const { options, error } = useOptions(type)

  useEffect(() => {
    if (options && value === '') {
      handler(name, options[0].label)
    }
  }, [options, value])

  if (error) {
    return <Dropdown options={['Something went wrong']} disabled />
  }

  if (options) {
    return (
      <Dropdown
        options={options}
        onChange={(option) => handler(name, option.value)}
        value={value}
      />
    )
  }

  return <Dropdown options={['Loading options…']} disabled />
}
