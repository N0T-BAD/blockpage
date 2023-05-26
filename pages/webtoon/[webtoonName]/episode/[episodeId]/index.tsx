import Layout from "@/components/layouts/layout"
import EpisodeViewer from "@/components/pages/episodeviewer/EpisodeViewer"
import FooterViewer from "@/components/pages/episodeviewer/FooterViewer"
import { webtoonListData } from "@/data/dummy/webtoonData"
import { EpisodeListDataType, WebToonListDataType } from "@/types/webtoonDataType"

function EpisodeId(props: { dummyData: WebToonListDataType[], episodeData: EpisodeListDataType }) {
  const episodeData = props.episodeData;
  const dummyData = props.dummyData;

  return (
    <>
      <EpisodeViewer episodeData={episodeData} />
      <FooterViewer episodeData={episodeData} dummyData={dummyData} />
    </>
  )
}

export default EpisodeId

export async function getServerSideProps(context: any) {

  const { webtoonName } = context.query;
  const { episodeId } = context.query;
  console.log(webtoonName + " " + episodeId);

  const dummyData = webtoonListData;
  const webtoonData = dummyData.find((item) => item.title === webtoonName);
  const episodeData = webtoonData?.episodeData.find((item) => item.id === Number(episodeId));

  return {
    props: { dummyData, episodeData }
  }
}