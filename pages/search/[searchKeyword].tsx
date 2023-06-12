import axios from "axios"
import { KeyboardEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"

import SearchLayout from "@/components/layouts/SearchLayout"
import SearchResultSection from "@/components/pages/searchResult/SearchResultSection"
import { listviewDataType } from "@/types/listviewDataType"
import SearchBarSection from "@/components/pages/search/SearchBarSection"
import { Keyword } from "@/types/searchKeywords"
import Swal from "sweetalert2"

function SearchResult(props: { searchData: listviewDataType[] }) {
  const router = useRouter();
  const { searchKeyword } = router.query;

  const [value, setValue] = useState<string>(String(searchKeyword));
  const [searchData, setSearchData] = useState<listviewDataType[]>([]);
  const [keywords, setKeywords] = useState<Keyword[]>([]);

  const handleSearch = () => {
    if (value !== "") {
      handleAddKeyword(value);
      router.replace(`/search/${value}`);
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

  useEffect(() => {
    setSearchData(props.searchData);
  }, [searchKeyword])

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
      <SearchResultSection searchData={searchData} />
    </>
  )
}

SearchResult.getLayout = function getLayout(SearchResult: React.ReactElement) {
  return (
    <SearchLayout>
      {SearchResult}
    </SearchLayout>
  )
}

export default SearchResult

export async function getServerSideProps(context: any) {
  const { searchKeyword } = context.query;

  const res = await axios.get(`https://blockpage.site/webtoon-service/v1/webtoons/search?${searchKeyword}`, {
    params: {
      keyword: searchKeyword,
    }
  })
  const searchData = res.data.data

  return {
    props: { searchData }
  }
}