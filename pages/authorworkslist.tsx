import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import AuthorWorksListTopSection from "@/components/pages/authorworkslist/AuthorWorksListTopSection"

const authorworkslist: NextPageWithLayout = () => {
  return (
    <>
      <AuthorWorksListTopSection />
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

