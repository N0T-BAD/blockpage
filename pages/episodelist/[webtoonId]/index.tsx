import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { WebToonListDataType } from '@/types/webtoonDataType';
import { NextPageWithLayout } from '@/pages/_app';
import EpisodeTopSection from '@/components/pages/episodelist/EpisodeTopSection';
import EpisodeMiddleSection from '@/components/pages/episodelist/EpisodeMiddleSection';
import EpisodeLayout from '@/components/layouts/episodeheader/EpisodeLayout';

interface EpisodeListProps {
    webtoonId: number;
}

const EpisodeListPage: NextPageWithLayout<EpisodeListProps> = ({ webtoonId }) => {
    const { data: session } = useSession();
    const sort = 'DESC';
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

    useEffect(() => {

        const fetchEpisodeData = async () => {
            try {
                const response = await axios.get(
                    `https://blockpage.site/webtoon-service/v1/episodes?webtoonId=${webtoonId}&sort=${sort}`,
                    {
                        headers: {
                            memberId: session?.email || '',
                        },
                    }
                );
                const episodeData: WebToonListDataType = response.data.data;

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
        <EpisodeLayout webtoonId={page.props.webtoonId}>
            {page}
        </EpisodeLayout>
    )
}

export default EpisodeListPage;

export async function getServerSideProps({ query }: any) {
    const webtoonId = parseInt(query.webtoonId as string);

    return {
        props: {
            webtoonId,
        },
    };
}
