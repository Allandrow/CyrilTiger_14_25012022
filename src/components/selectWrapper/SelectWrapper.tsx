import { useEffect, useState } from 'react'
import { OptionsState, SelectWrapperProps } from '../../data/types'
import { useOptions } from '../../hooks/useOptions'

export const SelectWrapper = ({
  label,
  name,
  handler,
  init,
  content,
}: SelectWrapperProps) => {
  const [options, setOptions] = useState([] as OptionsState)
  const { status, data, error } = useOptions(content)

  useEffect(() => {
    if (data) {
      setOptions(
        data.map((item) => {
          return typeof item === 'string'
            ? { name: item, abbreviation: item }
            : item
        })
      )
    }
  }, [data])

  useEffect(() => {
    if (options.length > 0) {
      const value = options[0].abbreviation
      init(value, name)
    }
  }, [options])

  if (error) {
    return (
      <label>
        <span>{label}</span>
        <select name={name} disabled>
          <option value="">Something went wrong...</option>
        </select>
      </label>
    )
  }

  if (status === 'loading') {
    return (
      <label>
        <span>{label}</span>
        <select name={name} disabled>
          <option value="">Loading options...</option>
        </select>
      </label>
    )
  }

  return (
    <label>
      <span>{label}</span>
      <select name={name} onChange={handler}>
        {options.map((item) => (
          <option value={item.abbreviation} key={item.abbreviation}>
            {item.name}
          </option>
        ))}
      </select>
    </label>
  )
}
