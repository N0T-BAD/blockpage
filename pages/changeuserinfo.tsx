import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "@/pages/_app"

const ChangeUserInfo: NextPageWithLayout = () => {
  return (
    <>
    </>
  )
}

ChangeUserInfo.getLayout = function getLayout(ChangeUserInfo: React.ReactElement) {
  return (
    <Layout>
      {ChangeUserInfo}
    </Layout>
  )
}

export default ChangeUserInfo

