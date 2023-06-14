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

  return (
    <>
      <EpisodeTopSection />
      <EpisodeMiddleSection />
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

EpisodeListPage.auth = true