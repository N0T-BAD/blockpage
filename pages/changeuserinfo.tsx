import TotalLayout from "@/components/layouts/TotalLayout"
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
    <TotalLayout>
      {ChangeUserInfo}
    </TotalLayout>
  )
}

export default ChangeUserInfo

