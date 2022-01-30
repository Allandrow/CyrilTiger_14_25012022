import { FormEvent } from 'react'
import { State } from '../../data/selectData'

interface SelectWrapperProps {
  label: string
  name: string
  value: string
  handler: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void
  data: State[] | string[]
}

export const SelectWrapper = ({
  label,
  name,
  value,
  handler,
  data,
}: SelectWrapperProps) => {
  const options = data.map((item) =>
    typeof item === 'string' ? { name: item, abbreviation: item } : item
  )

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
