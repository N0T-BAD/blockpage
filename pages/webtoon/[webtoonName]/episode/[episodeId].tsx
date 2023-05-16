import Layout from "@/components/layouts/layout"
import EpisodeViewer from "@/components/pages/episodeviewer/EpisodeViewer"
import FooterViewer from "@/components/pages/episodeviewer/FooterViewer"
import { webtoonListData } from "@/data/dummy/webtoonData"
import { EpisodeListDataType } from "@/types/webtoonDataType"

function EpisodeId(props: { data: EpisodeListDataType }) {
  const data = props.data;

  return (
    <>
      <EpisodeViewer data={data} />
      <FooterViewer data={data} />
    </>
  )
}

EpisodeId.getLayout = function getLayout(episodeViewer: React.ReactElement) {
  return (
    <Layout>
      {episodeViewer}
    </Layout>
  )
}

export default EpisodeId

export async function getServerSideProps(context: any) {

  const { webtoonName } = context.query;
  const { episodeId } = context.query;
  console.log(webtoonName + " " + episodeId)

  const dummyData = webtoonListData;
  const webtoonData = dummyData.find((item) => item.title === webtoonName);
  const epiData = dummyData.find((item) => item.episodeData.find((item) => item.id) === episodeId)

  console.log(data)

  return {
    props: { data }
  }
}