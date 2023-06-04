import WebtoonChargeHeader from "./WebtoonChargeHeader";


export default function WebtoonChargeLayout(props: { children: React.ReactNode }) {

  return (
    <>
      <WebtoonChargeHeader />
      <div>{props.children}</div>
    </>
  )
}