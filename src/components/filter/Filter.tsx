import { HandleFiltering } from 'react-ts-datatable/dist/types'

interface FilterProps {
  handleFiltering: HandleFiltering
}

export const Filter = ({ handleFiltering }: FilterProps) => {
  return (
    <label htmlFor="search">
      <span>Search : </span>
      <input
        type="search"
        id="search"
        onChange={(e) => handleFiltering(e.currentTarget.value)}
      />
    </label>
  )
}
