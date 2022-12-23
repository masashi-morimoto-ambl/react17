const PERSIST_KEY = ['searchParams']

export const localStorageProvider = () => {
  // 初期化時に、 `localStorage` から Map にデータを復元します。
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))

  // アプリが終了する前に、すべてのデータを `localStorage` に保存します。
  window.addEventListener('beforeunload', () => {
    const persistKeyArray: [string, unknown][] = PERSIST_KEY.filter(
      v => map.get(v),
    ).map(v => [v, map.get(v)])
    const persistKeyMap = new Map(persistKeyArray)
    const appCache = JSON.stringify(Array.from(persistKeyMap.entries()))
    localStorage.setItem('app-cache', appCache)
  })

  // パフォーマンスのために、書き込みと読み取りには引き続き Map を使用します。
  return map
}
