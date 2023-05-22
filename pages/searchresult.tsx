import { NextPageWithLayout } from "@/pages/_app"
import SearchLayout from "@/components/layouts/SearchLayout"
import SearchBarSection from "@/components/pages/search/SearchBarSection"
import SearchResultSection from "@/components/pages/searchResult/SearchResultSection"

const searchResult: NextPageWithLayout = () => {
  return (
    <>
      <SearchResultSection />
    </>
  )
}

searchResult.getLayout = function getLayout(searchResult: React.ReactElement) {
  return (
    <SearchLayout>
      {searchResult}
    </SearchLayout>
  )
}

export default searchResult