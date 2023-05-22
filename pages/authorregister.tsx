import { NextPageWithLayout } from "@/pages/_app"
import AuthorRegisterSection from "@/components/pages/authorregister/AuthorRegisterSection"
import style from '@/pages/css/animation.module.css'
import TotalLayout from "@/components/layouts/TotalLayout"

const authorregister: NextPageWithLayout = () => {
  return (
    <div className={style.animation}>
      <AuthorRegisterSection />
    </div>
  )
}

authorregister.getLayout = function getLayout(authorregister: React.ReactElement) {
  return (
    <TotalLayout>
      {authorregister}
    </TotalLayout>
  )
}

export default authorregister

