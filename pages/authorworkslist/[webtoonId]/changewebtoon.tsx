import WebtoonChargeLayout from "@/components/layouts/webtoonheader/WebtoonChargeLayout"
import ChangeWebtoonMiddleSection from "@/components/pages/changewebtoon/ChangeWebtoonMiddleSection"
import ChangeWebtoonTopSection from "@/components/pages/changewebtoon/ChangeWebtoonTopSection"
import { NextPageWithLayout } from "@/pages/_app"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

interface EpisodeListProps {
    webtoonId: number;
}

const ChangeWebtoon: NextPageWithLayout<EpisodeListProps> = ({ webtoonId }) => {
    console.log(webtoonId);

    return (
        <>
            <ChangeWebtoonTopSection />
            <ChangeWebtoonMiddleSection />
        </>
    )
}

ChangeWebtoon.getLayout = function getLayout(ChangeWebtoon: React.ReactElement) {
    return (
        <WebtoonChargeLayout>
            {ChangeWebtoon}
        </WebtoonChargeLayout>
    )
}

export default ChangeWebtoon

export async function getServerSideProps(context: Params) {
    const { webtoonId } = context.query;

    console.log(webtoonId);

    return {
        props: {
            webtoonId,
        },
    };
}