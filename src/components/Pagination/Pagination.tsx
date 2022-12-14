import { Icon } from "../Icon/Icon"

type Props = {
  pageNo: number
  totalCount: number
  onPrev: () => void
  onNext: () => void
  countPerPage?: number
  className?: string
}

export const Pagination = (props: Props) => {
  const { pageNo, totalCount, countPerPage = 20 } = props

  const isFirstPage = props.pageNo === 1
  const isLastPage = countPerPage * props.pageNo >= props.totalCount

  const totalPage = Math.ceil(totalCount/countPerPage)

  const disabledLeft = isFirstPage
  const disabledRight = isLastPage

  return (
    <div className={`${props.className} flex justify-end items-center`}>
      <div className="right-3">
        <p className="text-xl mr-2">
          {pageNo}/{totalPage}ページ
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div onClick={props.onPrev}>
          <Icon name="chevronLeft" disabled={disabledLeft}/>
        </div>
        <div onClick={props.onNext}>
          <Icon name="chevronRight" disabled={disabledRight} />
        </div>
      </div>
    </div>
  )
}
