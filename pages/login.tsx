import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"

const Page: NextPageWithLayout = () => {
  return (
    <>
    </>
  )
}

Page.getLayout = function getLayout(Page: React.ReactElement) {
  return (
    <Layout>
      {Page}
    </Layout>
  )
}

export default Page

