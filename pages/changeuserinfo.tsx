import TotalLayout from "@/components/layouts/TotalLayout"
import ChangeUserInfo from "@/components/pages/changeuserinfo/ChangeUserInfo"
import { NextPageWithLayout } from "@/pages/_app"

const ChangeUserInfoPage: NextPageWithLayout = () => {
  return (
    <>
      <ChangeUserInfo />
    </>
  )
}

ChangeUserInfoPage.getLayout = function getLayout(ChangeUserInfo: React.ReactElement) {
  return (
    <TotalLayout>
      {ChangeUserInfo}
    </TotalLayout>
  )
}

export default ChangeUserInfoPage

