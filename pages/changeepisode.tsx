import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "@/pages/_app"
import ChangeEpisodeTopSection from "@/components/pages/changeepisode/ChangeEpisodeTopSection"
import ChangeEpisodeBottomSection from "@/components/pages/changeepisode/ChangeEpisodeBottomSection"

const ChangeEpisode: NextPageWithLayout = () => {
  return (
    <>
      <ChangeEpisodeTopSection />
      <ChangeEpisodeBottomSection />
    </>
  )
}

ChangeEpisode.getLayout = function getLayout(ChangeEpisode: React.ReactElement) {
  return (
    <Layout>
      {ChangeEpisode}
    </Layout>
  )
}

export default ChangeEpisode

