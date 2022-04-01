import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Employee } from '../types'
import { Link } from 'react-router-dom'
import { Header } from '@/modules/common'
import { TableContainer } from '@/modules/table'
import '../styles/table.css'

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
      <Header title="Current Employees" />

      <TableContainer data={employeeList} />

      <footer>
        <Link to={'/'}>Home</Link>
      </footer>
    </>
  )
}
