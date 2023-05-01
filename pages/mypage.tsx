import { NextPageWithLayout } from "./_app"
import Layout from "@/components/layouts/layout"


const mypage: NextPageWithLayout = () => {
    return (
        <>
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

