import AuthorWebtooninfoTopSection from "@/components/pages/webtooninfo/AuthorWebtooninfoTopSection"
import { NextPageWithLayout } from "./_app"
import Layout from "@/components/layouts/layout"
import AuthorWebtooninfoBottomSection from "@/components/pages/webtooninfo/AuthorWebtooninfoBottomSection"

const webtooninfo: NextPageWithLayout = () => {
    return (
        <>
            <AuthorWebtooninfoTopSection />
            <AuthorWebtooninfoBottomSection />
        </>
    )
}

webtooninfo.getLayout = function getLayout(webtooninfo: React.ReactElement) {
    return (
        <Layout>
            {webtooninfo}
        </Layout>
    )
}

export default webtooninfo

