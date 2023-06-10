import { NextPageWithLayout } from "@/pages/_app"
import AuthorRegisterSection from "@/components/pages/authorregister/AuthorRegisterSection"
import TotalLayout from "@/components/layouts/TotalLayout"

const Authorregister: NextPageWithLayout = () => {
  return (
    <>
      <AuthorRegisterSection />
    </>
  )
}

Authorregister.getLayout = function getLayout(authorregister: React.ReactElement) {
  return (
    <TotalLayout>
      {authorregister}
    </TotalLayout>
  )
}

export default Authorregister

Authorregister.auth = true