import axios from "axios"

import WebtoonLayout from "@/components/layouts/WebtoonLayout"
import WebtoonEpisodeSection from "@/components/pages/webtoonepisode/WebtoonEpisodeSection"
import WebtoonInfoSection from "@/components/pages/webtoonepisode/WebtoonInfoSection"
import ScrollToTopBtn from "@/components/ui/ScrollToTopBtn"
import { EpisodeViewListType, WebToonListDataType } from "@/types/webtoonDataType"

function Webtoon(props: { data: WebToonListDataType }) {

  const data = props.data;

  return (
    <>
      <WebtoonInfoSection data={data} />
      <WebtoonEpisodeSection data={data} />
      <ScrollToTopBtn />
    </>
  )
}

Webtoon.getLayout = function getLayout(webtoon: React.ReactElement) {
  return (
    <WebtoonLayout>
      {webtoon}
    </WebtoonLayout>
  )
}

export default Webtoon

export async function getServerSideProps(context: any) {

  const { webtoonId } = context.query;
  const sort = 'DESC';

  const res = await axios.get(`https://blockpage.site/webtoon-service/v1/episodes?webtoonId=${webtoonId}&sort=${sort}`)
  const data = res.data;

  return {
    props: { data }
  }
}