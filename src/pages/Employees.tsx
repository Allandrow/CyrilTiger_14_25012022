import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { DataTable } from 'react-ts-datatable'
import { Header } from '../components/header/Header'
import { columns } from '../data/selectData'
import '../styles/table.css'

const FIVE_MINUTES = 1000 * 60 * 5

const getEmployees = async () => {
  const { data } = await axios.get('/employees')
  return data
}

export const Employees = () => {
  const [employeeList, setEmployeeList] = useState([])
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
      <DataTable data={employeeList} columns={columns} />
    </>
  )
}
