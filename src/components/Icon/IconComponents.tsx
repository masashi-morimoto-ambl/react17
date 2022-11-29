export type Props = JSX.IntrinsicElements['svg'] & {
  color?: string
}

export const ChevronRight = (props: Props) => {
  const {className, color='text-gray-500',  ...restProps} = props
  const classNames = `${className} ${color}` 
  return (
    <svg {...restProps} className={`${classNames} h-8 w-8`}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg> 
  )
}

export const ChevronLeft = (props: Props) => {
  const {className, color='text-gray-500',  ...restProps} = props
  const classNames = `${className} ${color}` 
  return (
    <svg {...restProps} className={`${classNames} h-8 w-8`}  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
  )
}

export const OpenInNew = (props: Props) => {
  const {className, color='text-gray-500',  ...restProps} = props
  const classNames = `${className} ${color}` 
  return (
    <svg {...restProps} className={`${classNames} h-6 w-6`}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />  <polyline points="15 3 21 3 21 9" />  <line x1="10" y1="14" x2="21" y2="3" /></svg>
  )
}
