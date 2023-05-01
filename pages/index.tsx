import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import MainSection from "@/components/pages/main/MainSection"
import BestSection from "@/components/pages/best/BestSection"
import BestSection2 from "@/components/pages/best/BestSection2"
import GenreSection from "@/components/pages/genre/GenreSection"
import GameSection from "@/components/pages/game/GameSection"


const main: NextPageWithLayout = () => {
  return (
    <>
      <MainSection />
      <GameSection />
      <GenreSection />
      <BestSection />
      <BestSection2 />
    </>
  )
}

main.getLayout = function getLayout(main: React.ReactElement) {
  return (
    <Layout>
      {main}
    </Layout>
  )
}

export default main

