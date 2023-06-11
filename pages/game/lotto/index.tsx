import { NextPageWithLayout } from "@/pages/_app"
import TotalLayout from "@/components/layouts/TotalLayout"
import LottoGame from "@/components/games/LottoGame"

const Lotto: NextPageWithLayout = () => {
  return (
    <>
      <LottoGame />
    </>
  )
}

Lotto.getLayout = function getLayout(game: React.ReactElement) {
  return (
    <TotalLayout>
      {game}
    </TotalLayout>
  )
}

export default Lotto

Lotto.auth = true