import useSWR from "swr"


export type SearchParamsType = {
  page: number
  perPage: number
}
const initialState: SearchParamsType = {
  page: 1,
  perPage: 20,
}

export const useSearchParamsState = () => {
  const { data, mutate: setSearchParamsState } = useSWR(
    'searchParams',
    null,
    {
      fallbackData: initialState,
    },
  )
  const searchParamsState = data === undefined ? initialState : data

  return { searchParamsState, setSearchParamsState }
}
