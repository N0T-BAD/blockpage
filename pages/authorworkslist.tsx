import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import AuthorWorksListTopSection from "@/components/pages/authorworkslist/AuthorWorksListTopSection"
import AuthorWorksListMiddleSection from "@/components/pages/authorworkslist/AuthorWorksListMiddleSection"

const authorworkslist: NextPageWithLayout = () => {
  return (
    <>
      <AuthorWorksListTopSection />
      <AuthorWorksListMiddleSection />
    </>
  )
}

authorworkslist.getLayout = function getLayout(authorworkslist: React.ReactElement) {
  return (
    <Layout>
      {authorworkslist}
    </Layout>
  )
}

export default authorworkslist

