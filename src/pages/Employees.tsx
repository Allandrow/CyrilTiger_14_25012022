import axios from 'axios'
import { useQuery } from 'react-query'
import { Header } from '../components/header/Header'

const getEmployees = async () => {
  const { data } = await axios.get('/employees')
  return data
}

export const Employees = () => {
  const employeeList = useQuery('employees', getEmployees, {
    refetchOnWindowFocus: false,
  })

  console.log(employeeList)
  return (
    <>
      <Header link="/" text="Home" />
    </>
  )
}
