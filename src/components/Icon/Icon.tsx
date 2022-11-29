import { ChevronLeft, ChevronRight, OpenInNew } from "./IconComponents"

const ICONS = {
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  openInNew: OpenInNew
} as const

type ICONTYPE = keyof typeof ICONS

type Props = {
  name: ICONTYPE
  className?: string
  disabled?: boolean
}


export const Icon = (props: Props) => {
  const {name, className, disabled=false} = props
  const Icons = ICONS[name]
  const color = disabled ? 'text-gray-200' : 'text-gray-500'
  return (
    <button className={`${className} ${!disabled && 'hover:bg-gray-100 hover:cursor-pointer'} rounded-full p-1`}>
      <Icons name={name} color={color} />
    </button>
  )
}