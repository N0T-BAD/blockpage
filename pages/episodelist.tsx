import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import EpisodeTopSection from "@/components/pages/episodelist/EpisodeTopSection"
import EpisodeMiddleSection from "@/components/pages/episodelist/EpisodeMiddleSection"

const EpisodeList: NextPageWithLayout = () => {
    return (
        <>
            <EpisodeTopSection />
            <EpisodeMiddleSection />
        </>
    )
}

EpisodeList.getLayout = function getLayout(EpisodeList: React.ReactElement) {
    return (
        <Layout>
            {EpisodeList}
        </Layout>
    )
}

export default EpisodeList

