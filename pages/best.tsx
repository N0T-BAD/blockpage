import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import ListviewNavSection from "@/components/pages/listview/ListviewNavSection"
import ListviewSection from "@/components/pages/listview/ListviewSection"

const best: NextPageWithLayout = () => {
  return (
    <>
      <ListviewNavSection />
      <ListviewSection />
    </>
  )
}

best.getLayout = function getLayout(best: React.ReactElement) {
  return (
    <Layout>
      {best}
    </Layout>
  )
}

export default best

