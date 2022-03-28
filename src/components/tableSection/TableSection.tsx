import { useTable } from 'react-ts-datatable'
import { UseTableValues } from 'react-ts-datatable/dist/types'
import { Employee, columns } from '../../data'
import { Filter } from '../filter/Filter'
import { PageSizeSelect } from '../pageSizeSelect/PageSizeSelect'
import { Pagination } from '../pagination/Pagination'
import { Summary } from '../summary/Summary'
import { Table } from '../table/Table'

interface TableSectionProps {
  data: Employee[]
}

export const TableSection = ({ data }: TableSectionProps) => {
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
  }: UseTableValues = useTable({ columns, data })

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
