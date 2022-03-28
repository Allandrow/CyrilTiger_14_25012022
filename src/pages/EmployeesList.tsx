import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { TableSection } from '../components/tableSection/TableSection'
import { Employee } from '../types'
import '../styles/table.css'
import { Link } from 'react-router-dom'

const FIVE_MINUTES = 1000 * 60 * 5

const getEmployees = async () => {
  const { data } = await axios.get('/employees')
  return data
}

export const EmployeesList = () => {
  const [employeeList, setEmployeeList] = useState([] as Employee[])
  const employeeListQuery = useQuery('employees', getEmployees, {
    refetchOnWindowFocus: false,
    staleTime: FIVE_MINUTES,
  })

  useEffect(() => {
    if (employeeListQuery.status === 'success') {
      setEmployeeList(employeeListQuery.data)
    }
  }, [employeeListQuery.status])

  return (
    <>
      <header>
        <h1>Current Employees</h1>
      </header>
      <TableSection data={employeeList} />
      <footer>
        <Link to={'/'}>Home</Link>
      </footer>
    </>
  )
}
