type Props = {
  children: React.ReactNode
}
export const Cell = (props: Props) => {
  return (
    <p className="py-3 px-6 break-words">{props.children}</p>
  )
}