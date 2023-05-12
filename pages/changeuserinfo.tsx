import Layout from "@/components/layouts/layout"
import ChangeUserInfoSection from "@/components/pages/changeuserinfo/ChangeUserInfoSection"
import { NextPageWithLayout } from "@/pages/_app"

const ChangeUserInfo: NextPageWithLayout = () => {
  return (
    <>
      <ChangeUserInfoSection />
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

