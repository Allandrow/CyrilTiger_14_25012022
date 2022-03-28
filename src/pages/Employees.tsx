import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Header } from '../components/header/Header'
import '../styles/table.css'
import { Employee } from '../data'
import { TableSection } from '../components/tableSection/TableSection'

const FIVE_MINUTES = 1000 * 60 * 5

const getEmployees = async () => {
  const { data } = await axios.get('/employees')
  return data
}

export const Employees = () => {
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
      <Header link="/" text="Home" />
      <TableSection data={employeeList} />
    </>
  )
}
