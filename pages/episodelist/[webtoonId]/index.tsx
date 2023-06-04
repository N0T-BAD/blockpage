import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { EpisodeViewListType, WebToonListDataType } from '@/types/webtoonDataType';
import { NextPageWithLayout } from '@/pages/_app';
import EpisodeTopSection from '@/components/pages/episodelist/EpisodeTopSection';
import EpisodeMiddleSection from '@/components/pages/episodelist/EpisodeMiddleSection';
import EpisodeLayout from '@/components/layouts/episodeheader/EpisodeLayout';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

interface EpisodeListProps {
  webtoonId: number;
}

const EpisodeListPage: NextPageWithLayout<EpisodeListProps> = ({ webtoonId }) => {
  const { data: session } = useSession();
  const [episodeData, setEpisodeData] = useState<WebToonListDataType>({
    data: {
      webtoonTitle: '',
      creator: '',
      illustrator: '',
      description: '',
      publicationDays: '',
      genre: '',
      webtoonMainImage: '',
      views: 0,
      interestCount: 0,
      episodeViewList: [],
    },
    meta: {
      sort: '',
    },
  });
  console.log(episodeData)


  useEffect(() => {

    const fetchEpisodeData = async () => {
      try {
        const response = await axios.get(
          `https://blockpage.site/webtoon-service/v1/episodes`,
          {
            headers: {
              memberId: session?.email || '',
            },
            params: {
              webtoonId: webtoonId,
            },
          }
        );
        const episodeData = response.data;

        console.log(episodeData);
        setEpisodeData(episodeData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEpisodeData();
  }, [webtoonId, session]);

  return (
    <>
      <EpisodeTopSection />
      <EpisodeMiddleSection episodeData={episodeData} />
    </>
  );
};

EpisodeListPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <EpisodeLayout>
      {page}
    </EpisodeLayout>
  )
}

export default EpisodeListPage;

export async function getServerSideProps(context: Params) {
  const webtoonId = parseInt(context.webtoonId);

  return {
    props: {
      webtoonId,
    },
  };
}
