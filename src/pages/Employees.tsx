import axios from 'axios'
import { useQuery } from 'react-query'
import { Header } from '../components/header/Header'

const FIVE_MINUTES = 1000 * 60 * 5

const getEmployees = async () => {
  const { data } = await axios.get('/employees')
  return data
}

export const Employees = () => {
  const employeeList = useQuery('employees', getEmployees, {
    refetchOnWindowFocus: false,
    staleTime: FIVE_MINUTES,
  })
  console.log(employeeList)
  return (
    <>
      <Header link="/" text="Home" />
    </>
  )
}
