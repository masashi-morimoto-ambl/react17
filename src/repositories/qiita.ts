import { ACCESS_TOKEN, API_URL } from "../enums"
import { Fetcher } from "../lib"
import { GetItems, GetItemSchema } from "../models"

// Qiita記事の一覧を作成日時の降順で返します
const getItems = async (params: {
  page: number
  perPage: number
}): Promise<GetItems> => {
  const queryParam = new URLSearchParams([
    ['page', params.page.toString()],
    ['perPage', params.perPage.toString()],
  ])

  const response = await Fetcher<GetItemSchema[]>(
    `${API_URL.ITEMS}?${queryParam}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    },
  )
  return response
}

export const qiitaRepository = {
  getItems,
}