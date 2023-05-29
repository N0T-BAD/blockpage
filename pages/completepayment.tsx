import TotalLayout from "@/components/layouts/TotalLayout"
import CompletePayMentSection from "@/components/pages/chargeresult/CompletePayMentSection"
import { NextPageWithLayout } from "@/pages/_app"

const Completepayment: NextPageWithLayout = () => {

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

