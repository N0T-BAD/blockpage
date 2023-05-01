import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "./_app"
import Image from "next/image"
import style from "@/pages/login.module.css"

const login: NextPageWithLayout = () => {
  return (
    <>
      <div className={style.LogoSection}>
        <Image src={"/assets/images/logo/logoimg.png"} alt={"로고"} width={200} height={77} />
      </div>
      <div className={style.Logintxt}>
        <p>간편하게 로그인하고</p>
        <p>다양한 서비스를 이용해보세요.</p>
      </div>
      <div className={style.KakaoLogin}>
        <Image src={"/assets/images/login/kakao_login.png"} alt={"카카오 로그인"} width={300} height={50} />
      </div>
    </>
  )
}

login.getLayout = function getLayout(login: React.ReactElement) {
  return (
    <Layout>
      {login}
    </Layout>
  )
}

export default login

