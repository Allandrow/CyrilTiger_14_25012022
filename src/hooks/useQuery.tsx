import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'
import { Employee } from 'types'

const addEmployee = (employee: Employee) => {
  return axios.post('/employees', employee)
}

interface QueryProps {
  stateHandler: (value: Employee) => void
  defaultValue: Employee
}

export const useQuery = ({ stateHandler, defaultValue }: QueryProps) => {
  const queryClient = useQueryClient()

  const mutation = useMutation(addEmployee, {
    onSuccess: async ({ data }) => {
      queryClient.invalidateQueries('employees')
      queryClient.setQueryData('employees', data)
      stateHandler(defaultValue)
    },
  })

  return mutation
}
