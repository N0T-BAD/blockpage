import Layout from "@/components/layouts/layout"
import WebtoonEpisodeSection from "@/components/pages/webtoonepisode/WebtoonEpisodeSection"
import WebtoonInfoSection from "@/components/pages/webtoonepisode/WebtoonInfoSection"
import { webtoonListData } from "@/data/dummy/webtoonData"
import { WebToonListDataType } from "@/types/webtoonDataType"

function Webtoon(props: { data: WebToonListDataType }) {
  const data = props.data;
  console.log(data)

  return (
    <>
      <WebtoonInfoSection data={data} />
      <WebtoonEpisodeSection data={data} />
    </>
  )
}

Webtoon.getLayout = function getLayout(webtoon: React.ReactElement) {
  return (
    <Layout>
      {webtoon}
    </Layout>
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