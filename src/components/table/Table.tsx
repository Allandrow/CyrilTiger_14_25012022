import { HandleSorting, Header, Row } from 'react-ts-datatable/dist/types'
import { TableBody } from '../tableBody/TableBody'
import { TableHeader } from '../tableHeader/TableHeader'

interface TableProps {
  headers: Header[]
  rows: Row[]
  isFiltered: boolean
  handleSorting: HandleSorting
}

export const Table = ({
  headers,
  rows,
  isFiltered,
  handleSorting,
}: TableProps) => {
  return (
    <table>
      <TableHeader headers={headers} handleSorting={handleSorting} />
      <TableBody rows={rows} colSpan={headers.length} isFiltered={isFiltered} />
    </table>
  )
}
