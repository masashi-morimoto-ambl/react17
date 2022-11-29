type Props = {
  children: React.ReactNode
  isHeader?: boolean
}
export const List = (props: Props) => {
  const fontStyle = props.isHeader ? 'text-xl text-gray-500 font-bold' : 'text-xl'
  return (
    <div className={`grid border-b-2 bold grid-cols-5 ${fontStyle}`}>
      {props.children}
    </div>
  )
}