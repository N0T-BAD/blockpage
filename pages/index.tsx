import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import MainSection from "@/components/pages/main/MainSection"


const Page: NextPageWithLayout = () => {
  return (
    <>
      <MainSection />
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

