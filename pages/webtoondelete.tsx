import { NextPageWithLayout } from "@/pages/_app"
import WebtoonDeleteTopSection from "@/components/pages/webtoondelete/WebtoonDeleteTopSection"
import WebtoonDeleteMiddleSection from "@/components/pages/webtoondelete/WebtoonDeleteMiddleSection"
import TotalLayout from "@/components/layouts/TotalLayout"

const WebToonDelete: NextPageWithLayout = () => {
    return (
        <>
            <WebtoonDeleteTopSection />
            <WebtoonDeleteMiddleSection />
        </>
    )
}

WebToonDelete.getLayout = function getLayout(WebToonDelete: React.ReactElement) {
    return (
        <TotalLayout>
            {WebToonDelete}
        </TotalLayout>
    )
}

export default WebToonDelete

