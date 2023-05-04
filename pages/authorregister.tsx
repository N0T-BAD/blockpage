import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import AuthorRegisterTopSection from "@/components/pages/authorregister/AuthorRegisterTopSection"
import AuthorRegisterMiddleSection from "@/components/pages/authorregister/AuthorRegisterMiddleSection"

const authorregister: NextPageWithLayout = () => {
  return (
    <>
      <AuthorRegisterTopSection />
      <AuthorRegisterMiddleSection />
    </>
  )
}

authorregister.getLayout = function getLayout(authorregister: React.ReactElement) {
  return (
    <Layout>
      {authorregister}
    </Layout>
  )
}

export default authorregister

