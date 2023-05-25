import UserTopSection from "@/components/pages/mypage/UserTopSection"
import { NextPageWithLayout } from "@/pages/_app"
import UserMiddleSection from "@/components/pages/mypage/UserMiddleSection"
import UserBottomSection from "@/components/pages/mypage/UserBottomSection"
import MypageLayout from "@/components/layouts/MypageLayout"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import Swal from "sweetalert2"


const Mypage: NextPageWithLayout = () => {

  const { push } = useRouter();

  const { data: session } = useSession();

  if (!session) {
    push("/login");
  }

  return (
    <>
      <UserTopSection />
      <UserMiddleSection />
      <UserBottomSection />
    </>
  )
}

Mypage.getLayout = function getLayout(mypage: React.ReactElement) {

  return (
    <MypageLayout>
      {mypage}
    </MypageLayout>
  )
}

export default Mypage
