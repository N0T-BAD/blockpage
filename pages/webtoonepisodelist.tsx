import { NextPageWithLayout } from "./_app"

import Layout from "@/components/layouts/layout"
import WebtoonInfoSection from "@/components/pages/webtoonepisode/WebtoonInfoSection"

const webtoonepisodelist: NextPageWithLayout = () => {

  return (
    <>
      <WebtoonInfoSection />
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

