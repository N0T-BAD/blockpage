import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "@/pages/_app"
import AuthorRegisterSection from "@/components/pages/authorregister/AuthorRegisterSection"
import style from '@/pages/css/animation.module.css'

const authorregister: NextPageWithLayout = () => {
  return (
    <div className={style.animation}>
      <AuthorRegisterSection />
    </div>
  )
}

authorregister.getLayout = function getLayout(authorregister: React.ReactElement) {
  return (
    <Layout>
      {authorregister}
    </Layout>
  )
}

export default authorregister

