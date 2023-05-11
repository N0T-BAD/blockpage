import Layout from "@/components/layouts/layout"
import ChangeUserInfoMiddleSection from "@/components/pages/changeuserinfo/ChangeUserInfoMiddleSection"
import ChangeUserInfoTopSection from "@/components/pages/changeuserinfo/ChangeUserInfoTopSection"
import { NextPageWithLayout } from "@/pages/_app"

const ChangeUserInfo: NextPageWithLayout = () => {
  return (
    <>
      <ChangeUserInfoTopSection />
      <ChangeUserInfoMiddleSection />
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

