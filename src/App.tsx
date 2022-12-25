import { useEffect, useState } from 'react';
import './App.css';
import { Cell, Icon, List, Pagination } from './components';
import { SearchParamsType, useQiitaItemsState, useSearchParamsState } from './hooks';

// １ページに表示する記事数
const COUNT_PER_PAGE = 20

const Page = ({ searchParams }: { searchParams: SearchParamsType }) => {
  const {data: qiitaItems, isLoading} = useQiitaItemsState(searchParams)

  const getNumber = (index: number, pageNumber: number) => 
    index + 1 + (pageNumber - 1) * COUNT_PER_PAGE

  return isLoading ? (
    <p>読み込み中...</p>
  ):(
    <>
      {qiitaItems.data.map((v, index) => (
        <div key={v.id}>
          <List>
            <Cell>{getNumber(index, searchParams.page)}</Cell>
            <Cell>{v.title}</Cell>
            <Cell>{v.user.name || 'No Name'}</Cell>
            <Cell><a className='text-blue-600' href={v.url} target="_blank" rel="noopener noreferrer">{v.url}</a></Cell>
            <Cell>{v.updated_at}</Cell>
          </List>
        </div>   
      ))}
    </>
  )
}

const App = () => {
  // 取得アイテムの総数
  const [totalCount, setTotalCount] = useState(1000)

  const { searchParamsState, setSearchParamsState } = useSearchParamsState()

  return (
    <div className="App py-10">
      <h1 className='text-4xl'>記事一覧</h1>
      <div className='w-4/5 mx-auto'>
        <div className='text-right py-3'>
          <Pagination
            pageNo={searchParamsState.page}
            totalCount={totalCount}
            countPerPage={COUNT_PER_PAGE}
            onPrev={() => {
              setSearchParamsState({
                ...searchParamsState,
                page: searchParamsState.page - 1 < 1 ? searchParamsState.page : searchParamsState.page - 1
              })
            }}
            onNext={() => {
              setSearchParamsState({
                ...searchParamsState,
                page: searchParamsState.page + 1 > totalCount ? totalCount : searchParamsState.page + 1,
              })
            }}
          />
        </div>
        <List isHeader>
          <Cell>No</Cell>
          <Cell>タイトル</Cell>
          <Cell>ユーザー名</Cell>
          <Cell><span className='flex justify-center items-center'>URL<Icon name='openInNew'/></span></Cell>
          <Cell>更新日</Cell>
        </List>
        <Page searchParams={searchParamsState} />
        <div className='hidden'>
          <Page searchParams={{
            ...searchParamsState,
            page: searchParamsState.page + 1,
          }} />
        </div>
      </div>
    </div>
  );
}

export default App;
