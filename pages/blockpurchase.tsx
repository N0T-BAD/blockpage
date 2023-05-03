import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import BlcokChargeTopSection from "@/components/pages/blockcharge/BlcokChargeTopSection"
import TransactionHistorySection from "@/components/pages/blockpurchase/TransactionHistorySection"

const blockpurchase: NextPageWithLayout = () => {
  return (
    <>
      <BlcokChargeTopSection />
      <TransactionHistorySection />
    </>
  )
}

blockpurchase.getLayout = function getLayout(blockpurchase: React.ReactElement) {
  return (
    <Layout>
      {blockpurchase}
    </Layout>
  )
}

export default blockpurchase

