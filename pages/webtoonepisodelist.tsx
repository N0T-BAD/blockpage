import { NextPageWithLayout } from "./_app"

import Layout from "@/components/layouts/layout"
import WebtoonEpisodeSection from "@/components/pages/webtoonepisode/WebtoonEpisodeSection"
import WebtoonInfoSection from "@/components/pages/webtoonepisode/WebtoonInfoSection"

const webtoonepisodelist: NextPageWithLayout = () => {

  return (
    <>
      <WebtoonInfoSection />
      <WebtoonEpisodeSection />
    </>
  )
}

webtoonepisodelist.getLayout = function getLayout(webtoonepisodelist: React.ReactElement) {
  return (
    <Layout>
      {webtoonepisodelist}
    </Layout>
  )
}

export default webtoonepisodelist

