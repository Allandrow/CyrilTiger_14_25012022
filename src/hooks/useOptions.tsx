import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { OptionsState, Option } from '../data/types'

const getOptions = async (type: string) => {
  const { data } = await axios.get(`/${type}`)
  return data
}

export const useOptions = (type: string) => {
  const [options, setOptions] = useState(undefined as OptionsState)
  const { status, data, error } = useQuery<Option[] | string[], Error>(
    type,
    () => getOptions(type),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  )
  useEffect(() => {
    if (data) {
      setOptions(
        data.map((item) => {
          if (typeof item === 'string') {
            return {
              name: item,
              abbreviation: item,
            }
          }
          return item
        })
      )
    }
  }, [data])

  return { status, options, error }
}
