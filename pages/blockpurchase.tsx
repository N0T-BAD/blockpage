import { NextPageWithLayout } from "@/pages/_app"
import BlcokChargeTopSection from "@/components/pages/blockcharge/BlcokChargeTopSection"
import TransactionHistorySection from "@/components/pages/blockpurchase/TransactionHistorySection"
import BlockChargeLayout from "@/components/layouts/BlockChargeLayout"

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
    <BlockChargeLayout>
      {blockpurchase}
    </BlockChargeLayout>
  )
}

export default blockpurchase

