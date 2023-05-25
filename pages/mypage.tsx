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

  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      Swal.fire({
        icon: 'error',
        title: '로그인이 필요합니다.',
        showConfirmButton: false,
        timer: 1500
      })
      router.push("/login");
    }
  }, [session, router]);

  // 세션이 없는 경우 아무것도 렌더링하지 않음
  if (!session) {
    return null;
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
