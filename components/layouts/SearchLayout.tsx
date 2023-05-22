import SearchHeader from './header/SearchHeader'

export default function SearchLayout(props: { children: React.ReactNode }) {

  return (
    <>
      <SearchHeader />
      <div>{props.children}</div>
    </>
  )
}
