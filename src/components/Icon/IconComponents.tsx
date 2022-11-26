export type Props = JSX.IntrinsicElements['svg'] & {
  color?: string
}

export const ChevronRight = (props: Props) => {
  const {className, color= 'text-gray-500',  ...restProps} = props
  const classNames = `${className} ${color}` 
  return (
    <svg {...restProps} className={`${classNames} h-8 w-8`}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg> 
  )
}

export const ChevronLeft = (props: Props) => {
  const {className, color,  ...restProps} = props
  const classNames = `${className} ${color}` 
  return (
    <svg {...restProps} className={`${classNames} h-8 w-8`}  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
  )
}
