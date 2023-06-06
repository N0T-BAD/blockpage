import AuthorWebtooninfoTopSection from "@/components/pages/webtooninfo/AuthorWebtooninfoTopSection"
import { NextPageWithLayout } from "@/pages/_app"
import AuthorWebtooninfoBottomSection from "@/components/pages/webtooninfo/AuthorWebtooninfoBottomSection"
import TotalLayout from "@/components/layouts/TotalLayout"

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
        <TotalLayout>
            {webtooninfo}
        </TotalLayout>
    )
}

export default webtooninfo

webtooninfo.auth = true