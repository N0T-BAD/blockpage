import WebtoonLayout from "@/components/layouts/WebtoonLayout"
import WebtoonEpisodeSection from "@/components/pages/webtoonepisode/WebtoonEpisodeSection"
import WebtoonInfoSection from "@/components/pages/webtoonepisode/WebtoonInfoSection"
import ScrollToTopBtn from "@/components/ui/ScrollToTopBtn"
import { webtoonListData } from "@/data/dummy/webtoonData"
import { WebToonListDataType } from "@/types/webtoonDataType"
import { useRef } from "react"

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

  const { webtoonName } = context.query;
  console.log(context)

  const dummyData = webtoonListData;
  const data = dummyData.find((item) => item.title === webtoonName);
  console.log(data)
  return {
    props: { data }
  }
}