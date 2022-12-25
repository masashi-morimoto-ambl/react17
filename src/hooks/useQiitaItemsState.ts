import useSWR from "swr"
import { GetItems } from "../models"
import { qiitaRepository } from "../repositories/qiita"

type Props = Parameters<typeof qiitaRepository.getItems>[0]

const defaultValue: GetItems = {
  data: [],
  totalCount: '1000',
}

export const useQiitaItemsState = (props: Props) => {
  const res = useSWR(['QiitaItems', props], (_, args) => qiitaRepository.getItems(args))
  return {
    ...res,
    data: res.data || defaultValue,
    isLoading: res.isValidating || !res.data,
  }
}
