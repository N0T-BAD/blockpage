import { NextPageWithLayout } from "@/pages/_app"
import AuthorRegisterSection from "@/components/pages/authorregister/AuthorRegisterSection"
import TotalLayout from "@/components/layouts/TotalLayout"

const authorregister: NextPageWithLayout = () => {
  return (
    <>
      <AuthorRegisterSection />
    </>
  )
}

authorregister.getLayout = function getLayout(authorregister: React.ReactElement) {
  return (
    <TotalLayout>
      {authorregister}
    </TotalLayout>
  )
}

export default authorregister

