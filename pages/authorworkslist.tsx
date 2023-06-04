import { NextPageWithLayout } from "@/pages/_app"
import AuthorWorksListTopSection from "@/components/pages/authorworkslist/AuthorWorksListTopSection"
import AuthorWorksListMiddleSection from "@/components/pages/authorworkslist/AuthorWorksListMiddleSection"
import TotalLayout from "@/components/layouts/TotalLayout"

const authorworkslist: NextPageWithLayout = () => {
  return (
    <>
      <AuthorWorksListTopSection />
      <AuthorWorksListMiddleSection />
    </>
  )
}

authorworkslist.getLayout = function getLayout(authorworkslist: React.ReactElement) {
  return (
    <TotalLayout>
      {authorworkslist}
    </TotalLayout>
  )
}

export default authorworkslist