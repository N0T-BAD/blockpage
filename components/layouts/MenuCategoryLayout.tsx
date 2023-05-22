import CategoryHeader from "./header/CategoryHeader";

export default function MenuCategoryLayout(props: { children: React.ReactNode }) {

  return (
    <>
      <CategoryHeader />
      <div>{props.children}</div>
    </>
  )
}