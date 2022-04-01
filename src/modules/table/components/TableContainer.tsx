import { useTable } from 'react-ts-datatable'
import { Employee } from 'types'
import { columns } from '@/data'
import { PageSizeSelect } from './PageSizeSelect'
import { Filter } from './Filter'
import { Summary } from './Summary'
import { Pagination } from './Pagination'
import { Table } from './Table'
import { getDateString } from 'utils/utils'

interface TableContainerProps {
  data: Employee[]
}

const formatEmployeeDates = (employee: Employee): Employee => {
  const dateOfBirth = new Date(employee.dateOfBirth)
  const startDate = new Date(employee.startDate)
  return {
    ...employee,
    dateOfBirth: getDateString(dateOfBirth),
    startDate: getDateString(startDate),
  }
}

export const TableContainer = ({ data }: TableContainerProps) => {
  const formattedData = data.map((employee) => formatEmployeeDates(employee))

  const {
    headers,
    rows,
    pagination,
    summary,
    isFiltered,
    handleSorting,
    handleFiltering,
    handlePageChange,
    handlePageSizing,
  } = useTable({ columns, data: formattedData })

  return (
    <section className="dataTable">
      <PageSizeSelect
        options={[10, 20, 50, 100]}
        handlePageSizing={handlePageSizing}
      />
      <Filter handleFiltering={handleFiltering} />
      <Table
        headers={headers}
        rows={rows}
        isFiltered={isFiltered}
        handleSorting={handleSorting}
      />
      <Summary {...summary} />
      <Pagination pagination={pagination} handlePageChange={handlePageChange} />
    </section>
  )
}
