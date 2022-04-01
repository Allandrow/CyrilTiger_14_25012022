import { Row } from 'react-ts-datatable/dist/types'

interface TableBodyProps {
  rows: Row[]
  colSpan: number
  isFiltered: boolean
}
export const TableBody = ({ rows, colSpan, isFiltered }: TableBodyProps) => {
  const hasNoData = rows.length === 0 && !isFiltered
  const hasNoFilteredData = rows.length === 0 && isFiltered

  return (
    <tbody>
      {hasNoData && (
        <tr>
          <td colSpan={colSpan} className="empty">
            No data available in table
          </td>
        </tr>
      )}

      {hasNoFilteredData && (
        <tr>
          <td className="empty" colSpan={colSpan}>
            No matching records found
          </td>
        </tr>
      )}

      {rows.map(({ data, key }) => (
        <tr key={key}>
          {data.map(({ cellValue, key, isSorted }) => (
            <td key={key} className={isSorted ? 'sorted' : ''}>
              {cellValue as string}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
