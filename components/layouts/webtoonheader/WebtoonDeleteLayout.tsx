import WebtoonDeleteHeader from "./WebtoonDeleteHeader";


export default function WebtoonDeleteLayout(props: { children: React.ReactNode }) {

  return (
    <>
      <WebtoonDeleteHeader />
      <div>{props.children}</div>
    </>
  )
}