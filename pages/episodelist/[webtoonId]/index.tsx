import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { WebToonListDataType } from '@/types/webtoonDataType';
import Image from 'next/image';
import style from '@/components/pages/authorworkslist/AuthorSubCategory.module.css';

interface EpisodeListProps {
    webtoonId: number;
}

const EpisodeListPage: React.FC<EpisodeListProps> = ({ webtoonId }) => {
    const { data: session } = useSession();
    const sort = 'DESC';
    const router = useRouter();
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

    const handleDeleteClick = (episodeId: number) => {
        router.push(`/epdisodedelete/${episodeId}`);
    };

    return (
        <div>
            {episodeData.data && episodeData.data.episodeViewList.length > 0 ? (
                episodeData.data.episodeViewList.map((category) => (
                    <div className={style.webtoonBox} key={category.episodeId}>
                        <div className={style.webtoonInfoWrap}>
                            <div className={style.ImgWrap}>
                                <Image src={category.episodeThumbnail} alt={'이것이 법이다'} width={140} height={120} />
                            </div>
                            <div className={style.contentWrap}>
                                <p className={style.episodetitle}>{category.episodeNumber}화 {category.episodeTitle}</p>
                                <div className={style.option}>
                                    <div className={style.views}>
                                        <Image src={'/assets/images/icons/star.svg'} alt={'평점'} width={10} height={10} />
                                        <p className={style.viewstxt}>{category.uploadDate}</p>
                                    </div>
                                    <div className={style.likes}>
                                        <p className={style.likestxt}>{category.totalScore}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.webtoonButton}>
                            <button onClick={() => router.push('/changeepisode')}>수정</button>
                            <button onClick={() => handleDeleteClick(category.episodeId)}>삭제</button>
                        </div>
                    </div>
                ))
            )
                :
                "작품이 없습니다."
            }
        </div>
    );
};

export default EpisodeListPage;

export async function getServerSideProps({ query }: any) {
    const webtoonId = parseInt(query.webtoonId as string);

    return {
        props: {
            webtoonId,
        },
    };
}
