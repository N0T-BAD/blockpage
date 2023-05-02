import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import BlcokChargeTopSection from "@/components/pages/blockcharge/BlcokChargeTopSection"

const blockcharge: NextPageWithLayout = () => {
  return (
    <>
      <BlcokChargeTopSection />
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

