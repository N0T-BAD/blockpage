import { NextPageWithLayout } from "./_app"

import Layout from "@/components/layouts/layout"
import CommentSection from "@/components/pages/comment/CommentSection"

const comment: NextPageWithLayout = () => {

  return (
    <>
      <CommentSection />
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

