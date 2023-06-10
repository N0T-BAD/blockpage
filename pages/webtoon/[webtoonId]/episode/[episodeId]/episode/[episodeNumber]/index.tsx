import { useEffect, useState } from "react";

import EpisodeViewer from "@/components/pages/episodeviewer/EpisodeViewer"
import FooterViewer from "@/components/pages/episodeviewer/FooterViewer"
import { EpisodeViewDataType } from "@/types/webtoonDataType"
import axios from "axios";

function EpisodeId(props: { data: EpisodeViewDataType }) {
  const data = props.data;
  const [isViewer, setIsViewer] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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