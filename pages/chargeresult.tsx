import { NextPageWithLayout } from "@/pages/_app"
import ChargeResultSection from "@/components/pages/chargeresult/ChargeResultSection"
import TotalLayout from "@/components/layouts/TotalLayout"

const Chargeresult: NextPageWithLayout = () => {

  return (
    <ChargeResultSection />
  )
}

Chargeresult.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <TotalLayout>
      {page}
    </TotalLayout>
  )
}

export default Chargeresult

Chargeresult.auth = true;