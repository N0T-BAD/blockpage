import { NextPageWithLayout } from "./_app"

import Layout from "@/components/layouts/layout"
import EpisodeViewer from "@/components/pages/episodeviewer/EpisodeViewer"
import FooterViewer from "@/components/pages/episodeviewer/FooterViewer"

const episodeViewer: NextPageWithLayout = () => {
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