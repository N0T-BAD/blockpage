import TotalHeader from "@/components/layouts/header/TotalHeader"

export default function TotalLayout(props: { children: React.ReactNode }) {

  return (
    <>
      <TotalHeader />
      <div>{props.children}</div>
    </>
  )
}