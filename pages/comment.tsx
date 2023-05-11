import { NextPageWithLayout } from "./_app"

import Layout from "@/components/layouts/layout"
import CommentInputSection from "@/components/pages/comment/CommentInputSection"

const comment: NextPageWithLayout = () => {

  return (
    <>
      <CommentInputSection />

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

