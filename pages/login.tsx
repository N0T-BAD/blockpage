import { NextPageWithLayout } from "@/pages/_app"
import LoginSection from "@/components/pages/login/LoginSection"
import LoginLayout from "@/components/layouts/LoginLayout"

const Login: NextPageWithLayout = () => {

  return (
    <LoginSection />
  )
}

Login.getLayout = function getLayout(login: React.ReactElement) {
  return (
    <LoginLayout>
      {login}
    </LoginLayout>
  )
}

export default Login

