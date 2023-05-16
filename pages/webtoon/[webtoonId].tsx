import { GetServerSideProps } from "next"

import Layout from "@/components/layouts/layout"
import WebtoonEpisodeSection from "@/components/pages/webtoonepisode/WebtoonEpisodeSection"
import WebtoonInfoSection from "@/components/pages/webtoonepisode/WebtoonInfoSection"
import { webtoonListData } from "@/data/dummy/webtoonData"
import { WebToonListDataType } from "@/types/webtoonDataType"

export const getServerSideProps: GetServerSideProps = async (context: any) => {

  const { webtoonId } = context.query;

  const dummyData = webtoonListData;
  const data = dummyData.filter((item) => item.id === Number(webtoonId));
  return {
    props: { data }
  }
}

function Webtoon(props: { data: WebToonListDataType[] }) {

  return (
    <>
      {
        props.data.map((data) => (
          <div key={data.id}>
            <WebtoonInfoSection data={data} />
            <WebtoonEpisodeSection data={data} />
          </div>
        ))
      }
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