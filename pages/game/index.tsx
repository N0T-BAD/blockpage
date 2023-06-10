import { NextPageWithLayout } from "@/pages/_app"
import TotalLayout from "@/components/layouts/TotalLayout"
import GameContent from "@/components/pages/game/GameContent"

const Game: NextPageWithLayout = () => {
  return (
    <>
      <GameContent />
    </>
  )
}

Game.getLayout = function getLayout(game: React.ReactElement) {
  return (
    <TotalLayout>
      {game}
    </TotalLayout>
  )
}

export default Game