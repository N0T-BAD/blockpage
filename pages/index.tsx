import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "@/pages/_app"
import MainSection from "@/components/pages/main/MainSection"
import GameSection from "@/components/pages/main/game/GameSection"
import BestSection from "@/components/pages/main/best/BestSection"
import CategoryFilter from "@/components/pages/main/category/CategoryFilter"


const main: NextPageWithLayout = () => {
  return (
    <>
      <MainSection />
      <GameSection />
      <CategoryFilter />
      <BestSection />
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

