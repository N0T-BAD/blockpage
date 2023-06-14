import { NextPageWithLayout } from "@/pages/_app"
import ChangeEpisodeTopSection from "@/components/pages/changeepisode/ChangeEpisodeTopSection"
import ChangeEpisodeBottomSection from "@/components/pages/changeepisode/ChangeEpisodeBottomSection"
import TotalLayout from "@/components/layouts/TotalLayout"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import EpisodeChangeLayout from "@/components/layouts/episodeheader/EpisodeChangeLayout"

interface EpisodeListProps {
  webtoonId: number;
  episodeNumber: number;
}

const ChangeEpisode: NextPageWithLayout<EpisodeListProps> = ({ webtoonId, episodeNumber }) => {

  return (
    <>
      <ChangeEpisodeTopSection />
      <ChangeEpisodeBottomSection />
    </>
  )
}

ChangeEpisode.getLayout = function getLayout(ChangeEpisode: React.ReactElement) {
  return (
    <EpisodeChangeLayout>
      {ChangeEpisode}
    </EpisodeChangeLayout>
  )
}

export default ChangeEpisode

export async function getServerSideProps(context: Params) {
  const { webtoonId } = context.query;
  const { episodeNumber } = context.query;

  return {
    props: {
      webtoonId,
      episodeNumber,
    },
  };
}

ChangeEpisode.auth = true