import { NextPageWithLayout } from "../../../../_app"

import Layout from "@/components/layouts/layout"
import CommentInputSection from "@/components/pages/comment/CommentInputSection"
import GetCommentSection from "@/components/pages/comment/GetCommentSection"

const comment: NextPageWithLayout = () => {

  return (
    <>
      <CommentInputSection />
      <GetCommentSection />
    </>
  )
}

comment.getLayout = function getLayout(comment: React.ReactElement) {
  return (
    <Layout>
      {comment}
    </Layout>
  )
}

export default comment

