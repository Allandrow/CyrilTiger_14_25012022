import { paginationWithSuspend } from 'react-ts-datatable'
import {
  HandlePageChange,
  PaginationParams,
} from 'react-ts-datatable/dist/types'
import { PaginationList } from './PaginationList'

interface PaginationProps {
  pagination: PaginationParams | null
  handlePageChange: HandlePageChange
}

export const Pagination = ({
  pagination,
  handlePageChange,
}: PaginationProps) => {
  const paginationHelperValues = pagination
    ? paginationWithSuspend(pagination)
    : null

  const goToPreviousPage = () => {
    if (pagination) handlePageChange(pagination.page - 1)
  }

  const goToNextPage = () => {
    if (pagination) handlePageChange(pagination.page + 1)
  }

  const isPreviousButtonDisabled =
    !pagination || pagination.page === pagination.firstPage
  const isNextButtonDisabled =
    !pagination || pagination.page === pagination.lastPage

  return (
    <ul className="pagination">
      <li>
        <button
          onClick={goToPreviousPage}
          disabled={isPreviousButtonDisabled}
          className="pagination-nav"
        >
          previous
        </button>
      </li>
      {paginationHelperValues && (
        <PaginationList
          {...paginationHelperValues}
          handlePageChange={handlePageChange}
        />
      )}
      <li>
        <button
          onClick={goToNextPage}
          disabled={isNextButtonDisabled}
          className="pagination-nav"
        >
          next
        </button>
      </li>
    </ul>
  )
}
