import { useEffect, FormEvent } from 'react'
import { useOptions } from '../../hooks/useOptions'

type SelectWrapperProps = {
  label: string
  name: string
  handler: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void
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
      init(name, options[0].abbreviation)
    }
  }, [options, value])

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

  if (status === 'loading' || !options) {
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
      <select name={name} onChange={handler} value={value}>
        {options.map((item) => (
          <option value={item.abbreviation} key={item.abbreviation}>
            {item.name}
          </option>
        ))}
      </select>
    </label>
  )
}
