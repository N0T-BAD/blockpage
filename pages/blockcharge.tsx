import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"

const blockcharge: NextPageWithLayout = () => {
  return (
    <>
    </>
  )
}

blockcharge.getLayout = function getLayout(blockcharge: React.ReactElement) {
  return (
    <Layout>
      {blockcharge}
    </Layout>
  )
}

export default blockcharge

