import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import BlcokChargeTopSection from "@/components/pages/blockcharge/BlcokChargeTopSection"
import BlockChargeMiddleSection from "@/components/pages/blockcharge/BlockChargeMiddleSection"

const blockcharge: NextPageWithLayout = () => {
  return (
    <>
      <BlcokChargeTopSection />
      <BlockChargeMiddleSection />
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

