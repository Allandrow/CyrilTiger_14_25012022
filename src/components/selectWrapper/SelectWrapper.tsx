import { useEffect, FormEvent } from 'react'
import { useOptions } from '../../hooks/useOptions'

type SelectWrapperProps = {
  label: string
  name: string
  handler: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void
  init: (value: string, name: string) => void
  content: string
}

export const SelectWrapper = ({
  label,
  name,
  handler,
  init,
  content,
}: SelectWrapperProps) => {
  const { status, options, error } = useOptions(content)

  useEffect(() => {
    if (options) {
      const value = options[0].abbreviation
      init(name, value)
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
