import {
  HandlePageChange,
  PaginationRenderValues,
} from 'react-ts-datatable/dist/types'
import { PageButton } from '../pageButton/PageButton'

interface PaginationListProps extends PaginationRenderValues {
  handlePageChange: HandlePageChange
}

export const PaginationList = ({
  firstPage,
  lastPage,
  page,
  pageList,
  suspendAfterList,
  suspendBeforeList,
  handlePageChange,
}: PaginationListProps) => {
  return (
    <>
      {suspendBeforeList && (
        <>
          <li key={firstPage}>
            <PageButton page={page} handlePageChange={handlePageChange} />
          </li>
          <li key="suspendedBeforeList">
            <span>…</span>
          </li>
        </>
      )}
      {pageList.length > 0 &&
        pageList.map((pageNumber) => (
          <li key={pageNumber} className={pageNumber === page ? 'current' : ''}>
            {pageNumber === page ? (
              <span>{pageNumber}</span>
            ) : (
              <PageButton
                page={pageNumber}
                handlePageChange={handlePageChange}
              />
            )}
          </li>
        ))}
      {suspendAfterList && (
        <>
          <li key="suspendedAfterList">
            <span>…</span>
          </li>
          <li key={lastPage}>
            <PageButton page={lastPage} handlePageChange={handlePageChange} />
          </li>
        </>
      )}
    </>
  )
}
