import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import EpisodeDeleteTopSection from "@/components/pages/episodedelete/EpisodeDeleteTopSection"
import EpisodeDeleteMiddleSection from "@/components/pages/episodedelete/EpisodeDeleteMiddleSection"

const EpisodeDelete: NextPageWithLayout = () => {
    return (
        <>
            <EpisodeDeleteTopSection />
            <EpisodeDeleteMiddleSection />
        </>
    )
}

EpisodeDelete.getLayout = function getLayout(EpisodeDelete: React.ReactElement) {
    return (
        <Layout>
            {EpisodeDelete}
        </Layout>
    )
}

export default EpisodeDelete

