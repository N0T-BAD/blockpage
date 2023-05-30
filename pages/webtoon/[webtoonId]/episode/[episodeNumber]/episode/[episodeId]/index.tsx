import { useEffect, useState } from "react";

import EpisodeViewer from "@/components/pages/episodeviewer/EpisodeViewer"
import FooterViewer from "@/components/pages/episodeviewer/FooterViewer"
import { webtoonListData } from "@/data/dummy/webtoonData"
import { EpisodeListDataType, EpisodeViewDataType, WebToonListDataType } from "@/types/webtoonDataType"
import DataFetchingLoader from "@/components/widgets/DataFetchingLoader";
import axios from "axios";
import { useRouter } from "next/router";

function EpisodeId(props: { data: EpisodeViewDataType }) {
  const data = props.data;
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
      <EpisodeViewer episodeData={data} />
      <FooterViewer episodeData={data} isViewer={isViewer} setIsViewer={setIsViewer} />
    </>
  )
}

export default EpisodeId

export async function getServerSideProps(context: any) {

  const { webtoonId } = context.query;
  const { episodeNumber } = context.query;
  const { episodeId } = context.query;

  console.log(webtoonId)
  console.log(episodeNumber)
  console.log(episodeId)

  const res = await axios.get(`https://blockpage.site/webtoon-service/v1/episodes/view?episodeId=${episodeId}&webtoonId=${webtoonId}&episodeNumber=${episodeNumber}`)
  const data = res.data;
  console.log(data);

  return {
    props: { data }
  }
}

// EpisodeId.auth = {
//   // role: "admin",
//   loading: <DataFetchingLoader text="load" />,
//   unauthorized: '/login', // redirect to this url
// }