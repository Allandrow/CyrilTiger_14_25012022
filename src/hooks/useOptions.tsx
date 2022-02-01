import axios from 'axios'
import { useQuery } from 'react-query'
import { State } from '../data/selectData'

const getOptions = async (type: string) => {
  const { data } = await axios.get(`http://localhost:3000/${type}`)
  return data
}

export const useOptions = (type: string) => {
  return useQuery<State[] | string[], Error>(type, () => getOptions(type), {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  })
}
