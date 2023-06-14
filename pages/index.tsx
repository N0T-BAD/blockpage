import Layout from "@/components/layouts/layout"
import GameSection from "@/components/pages/main/game/GameSection"
import BestSection from "@/components/pages/main/best/BestSection"
import { GameBannerType } from "@/types/gameBanerType"
import { gameEventData } from "@/data/dummy/mainGameEventData"
import MainBannerSection from "@/components/pages/main/MainBannerSection"

function Main(props: { gameBannerData: GameBannerType[] }) {

  return (
    <>
      <MainBannerSection />
      <GameSection
        data={props.gameBannerData}
      />
      {/* <CategoryFilter /> */}
      <BestSection />
    </>
  )
}

Main.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Main

export async function getServerSideProps(context: any) {

  const gameRes = gameEventData

  return {
    props: {
      gameBannerData: gameRes
    }
  }
}
