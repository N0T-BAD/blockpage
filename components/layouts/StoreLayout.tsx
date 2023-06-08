import StoreHeader from "@/components/layouts/header/StoreHeader"

export default function StoreLayout(props: { children: React.ReactNode }) {

  return (
    <>
      <StoreHeader />
      <div>{props.children}</div>
    </>
  )
}