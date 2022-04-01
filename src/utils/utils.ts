type PadLeft = (value: string, length?: number, padChar?: string) => string

const padLeft: PadLeft = (value, length = 2, padChar = '0') => {
  return value.length < length ? `${padChar + value}` : value
}

export const getDateString = (date: Date): string => {
  const days = date.getDate().toString()
  const month = (date.getMonth() + 1).toString()
  const year = date.getFullYear().toString()

  return `${padLeft(month)}/${padLeft(days)}/${year}`
}
