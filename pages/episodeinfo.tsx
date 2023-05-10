import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "@/pages/_app"
import EpisodeInfoTopSection from "@/components/pages/episodeinfo/EpisodeInfoTopSection"
import EpisodeInfoBottomSection from "@/components/pages/episodeinfo/EpisodeInfoBottomSection"

const EpisodeInfo: NextPageWithLayout = () => {
  return (
    <>
      <EpisodeInfoTopSection />
      <EpisodeInfoBottomSection />
    </>
  )
}

EpisodeInfo.getLayout = function getLayout(EpisodeInfo: React.ReactElement) {
  return (
    <Layout>
      {EpisodeInfo}
    </Layout>
  )
}

export default EpisodeInfo

