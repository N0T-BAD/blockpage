import { NextPageWithLayout } from "@/pages/_app"
import BlcokChargeTopSection from "@/components/pages/blockcharge/BlcokChargeTopSection"
import BlockChargeMiddleSection from "@/components/pages/blockcharge/BlockChargeMiddleSection"
import TotalLayout from "@/components/layouts/TotalLayout"

const Blockcharge: NextPageWithLayout = () => {
  return (
    <>
      <BlcokChargeTopSection />
      <BlockChargeMiddleSection />
    </>
  )
}

Blockcharge.getLayout = function getLayout(blockcharge: React.ReactElement) {
  return (
    <TotalLayout>
      {blockcharge}
    </TotalLayout>
  )
}

export default Blockcharge

Blockcharge.auth = true