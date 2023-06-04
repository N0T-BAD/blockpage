import WebtoonDeleteHeader from "./WebtoonDeleteHeader";


export default function WebtoonChargeLayout(props: { children: React.ReactNode }) {

  return (
    <>
      <WebtoonDeleteHeader />
      <div>{props.children}</div>
    </>
  )
}