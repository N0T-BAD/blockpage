import TotalLayout from "@/components/layouts/TotalLayout"
import ChangeWebtoonMiddleSection from "@/components/pages/changewebtoon/ChangeWebtoonMiddleSection"
import ChangeWebtoonTopSection from "@/components/pages/changewebtoon/ChangeWebtoonTopSection"
import { NextPageWithLayout } from "@/pages/_app"

const ChangeWebtoon: NextPageWithLayout = () => {
    return (
        <>
            <ChangeWebtoonTopSection />
            <ChangeWebtoonMiddleSection />
        </>
    )
}

ChangeWebtoon.getLayout = function getLayout(ChangeWebtoon: React.ReactElement) {
    return (
        <TotalLayout>
            {ChangeWebtoon}
        </TotalLayout>
    )
}

export default ChangeWebtoon

