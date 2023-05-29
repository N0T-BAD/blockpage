import EpisodeViewer from "@/components/pages/episodeviewer/EpisodeViewer"
import FooterViewer from "@/components/pages/episodeviewer/FooterViewer"
import { webtoonListData } from "@/data/dummy/webtoonData"
import { EpisodeListDataType, WebToonListDataType } from "@/types/webtoonDataType"
import { useEffect, useState } from "react";

function EpisodeId(props: { dummyData: WebToonListDataType[], episodeData: EpisodeListDataType }) {
  const episodeData = props.episodeData;
  const dummyData = props.dummyData;
  const [isViewer, setIsViewer] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    console.log("window.scrollY : ", window.scrollY)
    // console.log("window.innerHeight : ", window.innerHeight)
    // console.log("document.body.offsetHeight : ", document.body.offsetHeight)
    // console.log("window.scrollY + window.innerHeight : ", window.scrollY + window.innerHeight)
    // console.log("document.body.offsetHeight - 100 : ", document.body.offsetHeight - 100)
    if (window.scrollY + window.innerHeight > document.body.offsetHeight - 100) {
      console.log("isViewer : ", isViewer)
      setIsViewer(true);
    } else {
      setIsViewer(false);
    }

  };


  return (
    <>
      <EpisodeViewer episodeData={episodeData} />
      <FooterViewer episodeData={episodeData} dummyData={dummyData} isViewer={isViewer} />
    </>
  )
}

// EpisodeId.getLayout = function getLayout(episodeViewer: React.ReactElement) {
//   return (
//     <Layout>
//       {episodeViewer}
//     </Layout>
//   )
// }

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