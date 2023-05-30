import MypageHeader from "./header/MypageHeader"

export default function MypageLayout(props: { children: React.ReactNode }) {

  return (
    <>
      <MypageHeader />
      <div>{props.children}</div>
    </>
  )
}