import CommentLayout from "@/components/layouts/CommentLayout"
import { NextPageWithLayout } from "@/pages/_app"

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
    <CommentLayout>
      {comment}
    </CommentLayout>
  )
}

export default comment

