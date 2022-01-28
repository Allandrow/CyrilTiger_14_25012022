import { FormEvent } from 'react'
import { State } from '../../data/selectData'

interface SelectWrapperProps {
  label: string
  name: string
  handler: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void
  data: State[] | string[]
}

export const SelectWrapper = ({
  label,
  name,
  handler,
  data,
}: SelectWrapperProps) => {
  return (
    <label>
      <span>{label}</span>
      <select name={name} onChange={handler}>
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
