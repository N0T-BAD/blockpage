import TotalLayout from "@/components/layouts/TotalLayout"
import CompletePayMentSection from "@/components/pages/chargeresult/CompletePayMentSection"
import { NextPageWithLayout } from "@/pages/_app"
import { ChargeBlockResponse } from "@/types/chargeBlockData"

interface Props {
  orderdata: ChargeBlockResponse,
}

const Completepayment: NextPageWithLayout<Props> = ({ orderdata }) => {

  return (
    <>
      <CompletePayMentSection />
    </>
  )
}

Completepayment.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <TotalLayout>
      {page}
    </TotalLayout>
  )
}

export default Completepayment

Completepayment.auth = true;