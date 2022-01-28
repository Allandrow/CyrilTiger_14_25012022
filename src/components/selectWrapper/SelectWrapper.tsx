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
  return (
    <label>
      <span>{label}</span>
      <select name={name} onChange={handler} value={value}>
        {data.map((item) => {
          if (typeof item === 'string') {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            )
          }
          return (
            <option value={item.abbreviation} key={item.abbreviation}>
              {item.name}
            </option>
          )
        })}
      </select>
    </label>
  )
}
