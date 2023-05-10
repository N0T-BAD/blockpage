import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "@/pages/_app"
import AuthorRegisterTopSection from "@/components/pages/authorregister/AuthorRegisterTopSection"

const authorregister: NextPageWithLayout = () => {
  return (
    <>
      <AuthorRegisterTopSection />
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

