import { API_URL_BASE } from "../enums/url"

export const Fetcher = async <T>(
  endPoint: RequestInfo,
  config?: RequestInit,
): Promise<{
  data: T,
  totalCount: string 
}> => {
  const headers = {
    'content-type': 'application/json',
  }

  const response = await fetch(`${API_URL_BASE}${endPoint}`, {
    ...config,
    headers: {
      ...headers,
      ...config?.headers,
    },
  }).catch(() => {
    return Promise.reject()
  })

  const totalCount = response.headers.get('total-count') || ''

  const ret = {
    data: await response.json(),
    totalCount: totalCount
  }
  return ret
}
