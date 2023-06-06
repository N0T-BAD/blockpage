import axios from "axios"
import { KeyboardEvent, useState } from "react"

import { NextPageWithLayout } from "@/pages/_app"
import HistorySection from "@/components/pages/search/HistorySection"
import SearchLayout from "@/components/layouts/SearchLayout"
import SearchResultSection from "@/components/pages/searchResult/SearchResultSection"
import { listviewDataType } from "@/types/listviewDataType"
import SearchBarSection from "@/components/pages/search/SearchBarSection"


const Search: NextPageWithLayout = () => {
    const [value, setValue] = useState<string>('');
    const [searchData, setSearchData] = useState<listviewDataType[]>([]);

    const handleSearch = () => {
        axios.get(`https://blockpage.site/webtoon-service/v1/webtoons/search?${value}`, {
            params: {
                keyword: value,
            }
        })
            .then((res) => {
                console.log(res);
                setSearchData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <>
            <SearchBarSection handleSearch={handleSearch} handleOnKeyPress={handleOnKeyPress} setValue={setValue} />
            <HistorySection />
            <SearchResultSection searchData={searchData} />
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