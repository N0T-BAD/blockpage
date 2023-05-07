import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import MainSection from "@/components/pages/main/MainSection"
import GameSection from "@/components/pages/main/game/GameSection"
import CategoryFilter from "@/components/pages/main/category/CategoryFilter"
import BestSection from "@/components/pages/main/best/BestSection"
import Portal from "@/components/modals/ModalPortal"


const main: NextPageWithLayout = () => {
  return (
    <>
      <MainSection />
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

