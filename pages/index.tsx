import Layout from "@/components/layouts/layout"
import MainSection from "@/components/pages/main/MainSection"
import GameSection from "@/components/pages/main/game/GameSection"
import BestSection from "@/components/pages/main/best/BestSection"
import { MainBannerType } from "@/types/mainBannerType"
import { GameBannerType } from "@/types/gameBanerType"
import { mainEventBannerData } from "@/data/dummy/mainEventBannerData"
import { gameEventData } from "@/data/dummy/mainGameEventData"
import CategoryFilter from "@/components/pages/main/category/CategoryFilter"

function Main(props: { mainBannerData: MainBannerType, gameBannerData: GameBannerType[] }) {

  return (
    <>
      <MainSection
        data={props.mainBannerData}
      />
      <GameSection
        data={props.gameBannerData}
      />
      <CategoryFilter />
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

  let randomNumber: number = 0
  randomNumber = Math.floor(Math.random() * mainEventBannerData.length)
  const res = mainEventBannerData.find((data) => data.id === randomNumber + 1)
  // data fetching
  console.log(res)

  const gameRes = gameEventData
  console.log(gameRes)

  return {
    props: {
      mainBannerData: res,
      gameBannerData: gameRes
    }
  }
}
