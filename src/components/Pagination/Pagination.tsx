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
  const { countPerPage = 1 } = props

  const isFirstPage = props.pageNo === 1
  const isLastPage = countPerPage * props.pageNo >= props.totalCount

  const begin = countPerPage * (props.pageNo - 1) + 1

  const disabledLeft = isFirstPage
  const disabledRight = isLastPage

  return (
    <div className={`${props.className} flex items-center`}>
      <div className="right-3">
        <p className="text-xl">
          {begin}/{props.totalCount}ページ
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <Icon name="chevronLeft" disabled={disabledLeft} />
        <Icon name="chevronRight" disabled={disabledRight} />
      </div>
    </div>
  )
}
