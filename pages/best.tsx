import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"

const best: NextPageWithLayout = () => {
  return (
    <>
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

