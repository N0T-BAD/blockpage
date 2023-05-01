import UserTopSection from "@/components/pages/mypage/UserTopSection"
import { NextPageWithLayout } from "./_app"
import Layout from "@/components/layouts/layout"
import UserMiddleSection from "@/components/pages/mypage/UserMiddleSection"
import UserBottomSection from "@/components/pages/mypage/UserBottomSection"


const mypage: NextPageWithLayout = () => {
    return (
        <>
            <UserTopSection />
            <UserMiddleSection />
            <UserBottomSection />
        </>
    )
}

mypage.getLayout = function getLayout(mypage: React.ReactElement) {
    return (
        <Layout>
            {mypage}
        </Layout>
    )
}

export default mypage