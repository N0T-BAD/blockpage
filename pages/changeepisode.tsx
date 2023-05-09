import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "@/pages/_app"
import ChangeEpisodeTopSection from "@/components/pages/changeepisode/ChangeEpisodeTopSection"

const ChangeEpisode: NextPageWithLayout = () => {
  return (
    <>
      <ChangeEpisodeTopSection />
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

