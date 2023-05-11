import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "@/pages/_app"
import LoginSection from "@/components/pages/login/LoginSection"

const login: NextPageWithLayout = () => {
  return (
    <LoginSection />
  )
}

login.getLayout = function getLayout(login: React.ReactElement) {
  return (
    <Layout>
      {login}
    </Layout>
  )
}

export default login

