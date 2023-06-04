import { NextPageWithLayout } from "@/pages/_app"
import EpisodeInfoTopSection from "@/components/pages/episodeinfo/EpisodeInfoTopSection"
import EpisodeInfoBottomSection from "@/components/pages/episodeinfo/EpisodeInfoBottomSection"
import EpisodeInfoLayout from "@/components/layouts/episodeheader/EpisodeInfoLayout";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


interface EpisodeListProps {
    webtoonId: number;
}

const EpisodeInfo: NextPageWithLayout<EpisodeListProps> = ({ webtoonId }) => {
    console.log(webtoonId);

    return (
        <>
            <EpisodeInfoTopSection />
            <EpisodeInfoBottomSection />
        </>
    )
}

EpisodeInfo.getLayout = function getLayout(EpisodeInfo: React.ReactElement) {
    return (
        <EpisodeInfoLayout>
            {EpisodeInfo}
        </EpisodeInfoLayout>
    )
}

export default EpisodeInfo

export async function getServerSideProps(context: Params) {
    const { webtoonId } = context.query;

    console.log(webtoonId);

    return {
        props: {
            webtoonId,
        },
    };
}