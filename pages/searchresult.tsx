import SearchBarSection from "@/components/pages/search/SearchBarSection"
import { NextPageWithLayout } from "./_app"

import Layout from "@/components/layouts/layout"
import SearchResultSection from "@/components/pages/searchResult/SearchResultSection"

const searchResult: NextPageWithLayout = () => {
  return (
    <>
      <SearchBarSection />
      <SearchResultSection />
    </>
  )
}

searchResult.getLayout = function getLayout(searchResult: React.ReactElement) {
  return (
    <Layout>
      {searchResult}
    </Layout>
  )
}

export default searchResult