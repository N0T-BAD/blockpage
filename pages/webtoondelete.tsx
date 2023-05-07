import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import WebtoonDeleteTopSection from "@/components/pages/webtoondelete/WebtoonDeleteTopSection"
import WebtoonDeleteMiddleSection from "@/components/pages/webtoondelete/WebtoonDeleteMiddleSection"

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
        <Layout>
            {WebToonDelete}
        </Layout>
    )
}

export default WebToonDelete

