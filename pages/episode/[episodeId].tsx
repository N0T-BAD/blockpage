import { NextPageWithLayout } from "../_app"

import Layout from "@/components/layouts/layout"
import EpisodeViewer from "@/components/pages/episodeviewer/EpisodeViewer"
import FooterViewer from "@/components/pages/episodeviewer/FooterViewer"
import { webtoonListData } from "@/data/dummy/webtoonData"
import { useRouter } from "next/router"

const episodeViewer: NextPageWithLayout = () => {

  const { query } = useRouter();
  const { episodeId } = query;
  const dummyData = webtoonListData;
  const data = dummyData.filter((item) => item.id === Number(episodeId));

  return (
    <>
      <EpisodeViewer />
      <FooterViewer />
    </>
  )
}

episodeViewer.getLayout = function getLayout(episodeViewer: React.ReactElement) {
  return (
    <Layout>
      {episodeViewer}
    </Layout>
  )
}

export default episodeViewer