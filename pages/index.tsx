import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import MainSection from "@/components/pages/main/MainSection"
import BestSection from "@/components/pages/best/BestSection"
import BestSection2 from "@/components/pages/best/BestSection2"
import GenreSection from "@/components/pages/genre/GenreSection"
import GameSection from "@/components/pages/game/GameSection"


const Page: NextPageWithLayout = () => {
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

Page.getLayout = function getLayout(Page: React.ReactElement) {
  return (
    <Layout>
      {Page}
    </Layout>
  )
}

export default Page

