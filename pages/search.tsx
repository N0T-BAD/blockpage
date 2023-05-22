import { NextPageWithLayout } from "@/pages/_app"
import HistorySection from "@/components/pages/search/HistorySection"
import SearchLayout from "@/components/layouts/SearchLayout"


const Search: NextPageWithLayout = () => {
    return (
        <>
            <HistorySection />
        </>
    )
}

Search.getLayout = function getLayout(Search: React.ReactElement) {
    return (
        <SearchLayout>
            {Search}
        </SearchLayout>
    )
}

export default Search