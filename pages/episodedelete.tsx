import { NextPageWithLayout } from "@/pages/_app"
import EpisodeDeleteTopSection from "@/components/pages/episodedelete/EpisodeDeleteTopSection"
import EpisodeDeleteMiddleSection from "@/components/pages/episodedelete/EpisodeDeleteMiddleSection"
import TotalLayout from "@/components/layouts/TotalLayout"

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
        <TotalLayout>
            {EpisodeDelete}
        </TotalLayout>
    )
}

export default EpisodeDelete

