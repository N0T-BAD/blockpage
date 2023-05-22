import CategoryHeader from "./header/CategoryHeader";

export default function CategoryLayout(props: { children: React.ReactNode }) {

  return (
    <>
      <CategoryHeader />
      <div>{props.children}</div>
    </>
  )
}