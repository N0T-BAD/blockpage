import { NextPageWithLayout } from "@/pages/_app"
import LoginSection from "@/components/pages/login/LoginSection"
import LoginLayout from "@/components/layouts/LoginLayout"

const login: NextPageWithLayout = () => {
  return (
    <LoginSection />
  )
}

login.getLayout = function getLayout(login: React.ReactElement) {
  return (
    <LoginLayout>
      {login}
    </LoginLayout>
  )
}

export default login

