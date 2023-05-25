import UserTopSection from "@/components/pages/mypage/UserTopSection"
import { NextPageWithLayout } from "@/pages/_app"
import UserMiddleSection from "@/components/pages/mypage/UserMiddleSection"
import UserBottomSection from "@/components/pages/mypage/UserBottomSection"
import MypageLayout from "@/components/layouts/MypageLayout"


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
        <MypageLayout>
            {mypage}
        </MypageLayout>
    )
}

export default mypage
