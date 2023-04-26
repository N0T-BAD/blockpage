import Header from "./Header"

export default function Layout(props:{ children: React.ReactNode }) {

  return (
    <>
    <Header />
    <div>{props.children}</div>
    {/* footer component */}
    </>
  )
}