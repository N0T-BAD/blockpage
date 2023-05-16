import ArchiveHeader from "./header/ArchiveHeader";

export default function ArchiveLayout(props: { children: React.ReactNode }) {

  return (
    <>
      <ArchiveHeader />
      <div>{props.children}</div>
    </>
  )
}