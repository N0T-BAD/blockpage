import { NextPageWithLayout } from "@/pages/_app"
import EpisodeDeleteTopSection from "@/components/pages/episodedelete/EpisodeDeleteTopSection"
import TotalLayout from "@/components/layouts/TotalLayout"
import EpisodeDeleteInfo from "@/components/pages/episodedelete/EpisodeDeleteInfo"
import style from "@/components/pages/episodedelete/EpisodeDeleteMiddleSection.module.css"

const EpisodeDelete: NextPageWithLayout = () => {

  return (
    <>
      <EpisodeDeleteTopSection />
      <section className={style.EpisodeDeleteMiddleSection}>
        <EpisodeDeleteInfo />
      </section>
    </>
  )
}

EpisodeDelete.getLayout = function getLayout(EpisodeDelete: React.ReactElement) {
  return (
    <TotalLayout>
      {EpisodeDelete}
    </TotalLayout>
  )
}

export default EpisodeDelete

EpisodeDelete.auth = true