import { NextPageWithLayout } from "@/pages/_app"
import WebtoonDeleteTopSection from "@/components/pages/webtoondelete/WebtoonDeleteTopSection"
import WebtoonDeleteMiddleSection from "@/components/pages/webtoondelete/WebtoonDeleteMiddleSection"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import WebtoonDeleteLayout from "@/components/layouts/webtoonheader/WebtoonDeleteLayout"

interface EpisodeListProps {
    webtoonId: number;
}

const WebToonDelete: NextPageWithLayout<EpisodeListProps> = ({ webtoonId }) => {
    console.log(webtoonId);

    return (
        <>
            <WebtoonDeleteTopSection />
            <WebtoonDeleteMiddleSection />
        </>
    )
}

WebToonDelete.getLayout = function getLayout(WebToonDelete: React.ReactElement) {
    return (
        <WebtoonDeleteLayout>
            {WebToonDelete}
        </WebtoonDeleteLayout>
    )
}

export default WebToonDelete

export async function getServerSideProps(context: Params) {
    const { webtoonId } = context.query;

    console.log(webtoonId);

    return {
        props: {
            webtoonId,
        },
    };
}