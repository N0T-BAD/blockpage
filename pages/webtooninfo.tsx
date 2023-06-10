import AuthorWebtooninfoTopSection from "@/components/pages/webtooninfo/AuthorWebtooninfoTopSection"
import { NextPageWithLayout } from "@/pages/_app"
import AuthorWebtooninfoBottomSection from "@/components/pages/webtooninfo/AuthorWebtooninfoBottomSection"
import TotalLayout from "@/components/layouts/TotalLayout"

const Webtooninfo: NextPageWithLayout = () => {
    return (
        <>
            <AuthorWebtooninfoTopSection />
            <AuthorWebtooninfoBottomSection />
        </>
    )
}

Webtooninfo.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <TotalLayout>
            {page}
        </TotalLayout>
    )
}

export default Webtooninfo

Webtooninfo.auth = true;