import { useEffect, useState } from 'react';
import './App.css';
import { Cell, Icon, List, Pagination } from './components';
import { GetItemSchema } from './models';
import { itemRepository } from './repositories/qiita';

type SearchParam = {
  page: number
  totalCount: number
}

// １ページに表示する記事数
const COUNT_PER_PAGE = 20

const App = () => {

  const [items, setItems] = useState<GetItemSchema[]>()

  const [searchParams, setSearchParams] = useState<SearchParam>({
    page: 1,
    totalCount: 1000,
  })

  const getQiitaItems = async (searchParams: SearchParam) => {
    try {
      const response = await itemRepository.getItems({
        page: searchParams.page,
        perPage: searchParams.totalCount,
      })
      setItems(response.data)
      setSearchParams(prev => ({
        ...prev,
        totalCount: parseInt(response.totalCount) || 1000
      }))
    }catch(error) {
      console.log('error')
      console.log(error)
    }
  }

  const getNumber = (index: number, pageNumber: number) => 
    index + 1 + (pageNumber - 1) * COUNT_PER_PAGE

  useEffect(() => {
    getQiitaItems({
      page: searchParams.page,
      totalCount: searchParams.totalCount
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchParams.page])

  return (
    <div className="App py-10">
      <h1 className='text-4xl'>記事一覧</h1>
      <div className='w-4/5 mx-auto'>
        <div className='text-right py-3'>
          <Pagination
            pageNo={searchParams.page}
            totalCount={searchParams.totalCount}
            countPerPage={COUNT_PER_PAGE}
            onPrev={() => {
              setSearchParams(prev => ({
                ...prev,
                page: prev.page - 1 < 1 ? prev.page : prev.page - 1
              }))
            }}
            onNext={() => {
              setSearchParams(prev => ({
                ...prev,
                page: prev.page + 1 > prev.totalCount ? prev.totalCount : prev.page + 1,
              }))
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
        {items?.map((v, index) => (
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
      </div>
    </div>
  );
}

export default App;
