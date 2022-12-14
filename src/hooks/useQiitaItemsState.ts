import useSWR from "swr"
import { qiitaRepository } from "../repositories/qiita"

type Props = Parameters<typeof qiitaRepository.getItems>[0]

export const useQiitaItemsState = (props: Props) => {

  const res = useSWR(['QiitaItems', props], (_, args) => qiitaRepository.getItems(args))
  return {
    ...res,
    isLoading: res.isValidating || !res.data,
  }
}
