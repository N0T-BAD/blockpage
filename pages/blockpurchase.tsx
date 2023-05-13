import { NextPageWithLayout } from "@/pages/_app"
import TransactionHistorySection from "@/components/pages/blockpurchase/TransactionHistorySection"
import BlockChargeLayout from "@/components/layouts/BlockChargeLayout"
import BlockPurchaseTopSection from "@/components/pages/blockpurchase/BlockPurchaseTopSection"

const blockpurchase: NextPageWithLayout = () => {
  return (
    <>
      <BlockPurchaseTopSection />
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

