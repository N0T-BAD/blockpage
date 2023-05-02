import { NextPageWithLayout } from "./_app"
import HistorySection from "@/components/pages/search/HistorySection"
import Layout from "@/components/layouts/layout"
import SearchBarSection from "@/components/pages/search/SearchBarSection"


const Search: NextPageWithLayout = () => {
    return (
        <>
            <SearchBarSection />
            <HistorySection />
        </>
    )
}

Search.getLayout = function getLayout(Search: React.ReactElement) {
    return (
        <Layout>
            {Search}
        </Layout>
    )
}

export default Search

