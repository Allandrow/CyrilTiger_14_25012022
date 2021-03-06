import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Option } from '../types'

type OptionsState = Option[] | undefined

const getOptions = async (type: string) => {
  const { data } = await axios.get(`/${type}`)
  return data
}

export const useOptions = (type: string) => {
  const [options, setOptions] = useState(undefined as OptionsState)
  const { data, error } = useQuery<Option[] | string[], Error>(
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
              value: item,
              label: item,
            }
          }
          return item
        })
      )
    }
  }, [data])

  return { options, error }
}
