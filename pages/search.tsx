import { NextPageWithLayout } from "@/pages/_app"
import HistorySection from "@/components/pages/search/HistorySection"
import SearchBarSection from "@/components/pages/search/SearchBarSection"
import SearchLayout from "@/components/layouts/SearchLayout"


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
        <SearchLayout>
            {Search}
        </SearchLayout>
    )
}

export default Search