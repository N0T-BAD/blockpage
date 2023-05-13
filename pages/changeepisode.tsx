import { NextPageWithLayout } from "@/pages/_app"
import ChangeEpisodeTopSection from "@/components/pages/changeepisode/ChangeEpisodeTopSection"
import ChangeEpisodeBottomSection from "@/components/pages/changeepisode/ChangeEpisodeBottomSection"
import TotalLayout from "@/components/layouts/TotalLayout"

const ChangeEpisode: NextPageWithLayout = () => {
  return (
    <>
      <ChangeEpisodeTopSection />
      <ChangeEpisodeBottomSection />
    </>
  )
}

ChangeEpisode.getLayout = function getLayout(ChangeEpisode: React.ReactElement) {
  return (
    <TotalLayout>
      {ChangeEpisode}
    </TotalLayout>
  )
}

export default ChangeEpisode

