import { useEffect, useState } from "react";

import EpisodeViewer from "@/components/pages/episodeviewer/EpisodeViewer"
import FooterViewer from "@/components/pages/episodeviewer/FooterViewer"
import { webtoonListData } from "@/data/dummy/webtoonData"
import { EpisodeListDataType, WebToonListDataType } from "@/types/webtoonDataType"
import DataFetchingLoader from "@/components/widgets/DataFetchingLoader";

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
      <FooterViewer episodeData={episodeData} dummyData={dummyData} isViewer={isViewer} setIsViewer={setIsViewer} />
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

// EpisodeId.auth = {
//   // role: "admin",
//   loading: <DataFetchingLoader text="load" />,
//   unauthorized: '/login', // redirect to this url
// }