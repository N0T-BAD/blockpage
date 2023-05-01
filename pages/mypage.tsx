import UserTopSection from "@/components/pages/mypage/UserTopSection"
import { NextPageWithLayout } from "./_app"
import Layout from "@/components/layouts/layout"
import UserMiddleSection from "@/components/pages/mypage/UserMiddleSection"


const mypage: NextPageWithLayout = () => {
    return (
        <>
            <UserTopSection />
            <UserMiddleSection />
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