import { useState } from "react"
import useSwr from "swr"
export function useAppState(key: string, initialState: any) {
  const { data, mutate } = useSwr(key, () => initialState)
  const setData = (value: any) => {
    mutate(value, {
      optimisticData: value,
      revalidate: false,
      rollbackOnError: true,
      populateCache: true,
    })
  }

  return [data, setData]
}
