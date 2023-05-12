import { useRouter } from "next/router"
import Footer from "@/components/layouts/Footer"
import CommentHeader from "./header/CommentHeader";
import ListviewNavSection from "../pages/listview/ListviewNavSection";

export default function CategoryLayout(props: { children: React.ReactNode }) {

  return (
    <>
        <CommentHeader />
        <div>{props.children}</div>
    </>
  )
}