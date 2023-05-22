import CommentHeader from "./header/CommentHeader";

export default function CommentLayout(props: { children: React.ReactNode }) {

  return (
    <>
      <CommentHeader />
      <div>{props.children}</div>
    </>
  )
}