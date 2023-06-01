import Image from 'next/image';
import React from 'react';
import style from '@/components/pages/authorworkslist/AuthorSubCategory.module.css';
import { useRouter } from 'next/router';
import { WebToonListDataType } from '@/types/webtoonDataType';

interface EpisodeMiddleSectionProps {
    episodeData: WebToonListDataType;
}

export default function EpisodelistBox({ episodeData }: EpisodeMiddleSectionProps) {

    const router = useRouter();

    const handleDeleteClick = (episodeId: number) => {
        router.push(`/epdisodedelete/${episodeId}`);
    };

    return (
        <>
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
        </>
    );
}