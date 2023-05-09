import { NextPageWithLayout } from "../_app"

import Layout from "@/components/layouts/layout"
import WebtoonEpisodeSection from "@/components/pages/webtoonepisode/WebtoonEpisodeSection"
import WebtoonInfoSection from "@/components/pages/webtoonepisode/WebtoonInfoSection"

const webtoon: NextPageWithLayout = () => {

  return (
    <>
      <WebtoonInfoSection />
      <WebtoonEpisodeSection />
    </>
  )
}

webtoon.getLayout = function getLayout(webtoon: React.ReactElement) {
  return (
    <Layout>
      {webtoon}
    </Layout>
  )
}

export default webtoon

