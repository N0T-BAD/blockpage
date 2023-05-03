import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import ListviewNav from "@/components/pages/listview/ListviewNavSection"

const best: NextPageWithLayout = () => {
  return (
    <>
      <ListviewNav />
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

