import { NextPageWithLayout } from "@/pages/_app"
import AuthorWorksListTopSection from "@/components/pages/authorworkslist/AuthorWorksListTopSection"
import AuthorWorksListMiddleSection from "@/components/pages/authorworkslist/AuthorWorksListMiddleSection"
import TotalLayout from "@/components/layouts/TotalLayout"

const Authorworkslist: NextPageWithLayout = () => {
  return (
    <>
      <AuthorWorksListTopSection />
      <AuthorWorksListMiddleSection />
    </>
  )
}

Authorworkslist.getLayout = function getLayout(authorworkslist: React.ReactElement) {
  return (
    <TotalLayout>
      {authorworkslist}
    </TotalLayout>
  )
}

export default Authorworkslist

Authorworkslist.auth = true