import { NextPageWithLayout } from "@/pages/_app"
import EpisodeTopSection from "@/components/pages/episodelist/EpisodeTopSection"
import EpisodeMiddleSection from "@/components/pages/episodelist/EpisodeMiddleSection"
import TotalLayout from "@/components/layouts/TotalLayout"

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
        <TotalLayout>
            {EpisodeList}
        </TotalLayout>
    )
}

export default EpisodeList

