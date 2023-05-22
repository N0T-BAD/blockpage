import WebtoonHeader from "./header/WebtoonHeader";

export default function WebtoonLayout(props: { children: React.ReactNode }) {

  return (
    <>
      <WebtoonHeader />
      <div>{props.children}</div>
    </>
  )
}