import { useDropdown } from 'hooks/useDropdown'
import DatePicker from 'react-date-picker/dist/entry.nostyle'
import { UpdateField } from 'types'
import '@/styles/datepicker.css'

interface FieldProps {
  label: string
  type?: 'date' | 'dropdown' | 'text' | 'number'
  name: string
  value: string | Date
  placeholder?: string
  handler: UpdateField
}

export const Field = ({
  label,
  type = 'text',
  name,
  value,
  placeholder,
  handler,
}: FieldProps) => {
  const isDateField = type === 'date' && value instanceof Date
  const isInputField =
    (type === 'text' || type === 'number') && typeof value === 'string'

  let dropdown

  if (typeof value === 'string' && type === 'dropdown') {
    dropdown = useDropdown({ name, value, handler })
  }

  return (
    <label>
      <span>{label}</span>

      {isDateField && (
        <DatePicker
          name={name}
          value={value}
          onChange={(value: Date) => handler(name, value)}
          yearPlaceholder="YYYY"
          monthPlaceholder="MM"
          dayPlaceholder="DD"
          format="MM/dd/yyyy"
        />
      )}

      {type === 'dropdown' && dropdown}

      {isInputField && (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => handler(name, e.currentTarget.value)}
        />
      )}
    </label>
  )
}
