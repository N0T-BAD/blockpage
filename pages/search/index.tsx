import { KeyboardEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"

import { NextPageWithLayout } from "@/pages/_app"
import HistorySection from "@/components/pages/search/HistorySection"
import SearchLayout from "@/components/layouts/SearchLayout"
import SearchBarSection from "@/components/pages/search/SearchBarSection"
import { Keyword } from "@/types/searchKeywords"
import Swal from "sweetalert2"

const Search: NextPageWithLayout = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>('');
    const [keywords, setKeywords] = useState<Keyword[]>([]);

    const handleSearch = (keyword?: string) => {
        if (value !== "") {
            handleAddKeyword(value);
            router.push(`/search/${value}`);
        } else if (keyword && keyword !== '') {
            handleAddKeyword(keyword);
            router.push(`/search/${keyword}`);
        } else {
            Swal.fire({
                icon: 'warning',
                text: '검색어를 입력해주세요.',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }

    const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
            handleAddKeyword(value);
        }
    };

    const handleAddKeyword = (text: string) => {
        const removeSpace = text.replace(/(^\s*)|(\s*$)/, "");
        const temp = [...keywords];
        const checkWord = temp.find((data) => data.keyword === removeSpace);

        if (!checkWord) {
            const newKeyword = {
                id: Date.now(),
                keyword: text,
            };
            setKeywords([newKeyword, ...keywords.slice(0, 9)]);
        } else if (checkWord) {
            const newKeyword = {
                id: Date.now(),
                keyword: removeSpace,
            }
            const filtered = temp.filter((data) => data.keyword !== removeSpace)
            setKeywords([newKeyword, ...filtered.slice(0, 9)]);
        }
    }

    const handleRemoveKeyword = (id: number) => {
        const updatedKeywords = keywords.filter((keyword) => keyword.id !== id);
        setKeywords(updatedKeywords);
    };

    const handleAllRemoveKeyword = () => {
        setKeywords([]);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const result = localStorage.getItem('keywords') || '[]'
            setKeywords(JSON.parse(result))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('keywords', JSON.stringify(keywords))
    }, [keywords])

    return (
        <>
            <SearchBarSection
                handleSearch={handleSearch}
                handleOnKeyPress={handleOnKeyPress}
                handleAddKeyword={handleAddKeyword}
                setValue={setValue}
            />
            <HistorySection
                keywords={keywords}
                handleRemoveKeyword={handleRemoveKeyword}
                handleAllRemoveKeyword={handleAllRemoveKeyword}
                handleSearch={handleSearch}
                setValue={setValue}
            />
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