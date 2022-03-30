import DatePicker from 'react-date-picker/dist/entry.nostyle'
import { HandleDateChange } from '../../types'

interface DateWrapperProps {
  label: string
  name: string
  value: string | Date
  placeholder?: string
  handler: HandleDateChange
}

export const DateWrapper = ({
  label,
  name,
  value = new Date(),
  handler,
}: DateWrapperProps) => {
  const dateValue = new Date(value)
  return (
    <label>
      <span>{label}</span>
      <DatePicker
        name={name}
        value={dateValue}
        onChange={(value: Date) => handler(value, name)}
        yearPlaceholder="YYYY"
        monthPlaceholder="MM"
        dayPlaceholder="DD"
      />
    </label>
  )
}
