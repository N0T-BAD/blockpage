import React from 'react';
import style from '@/components/pages/episodelist/EpisodeMiddleSection.module.css';
import EpisodelistBox from '@/components/pages/episodelist/EpisodelistBox';
import { EpisodeViewListType, WebToonListDataType } from '@/types/webtoonDataType';
import EpisodeListFooter from '@/components/layouts/episodelistfooter/EpisodeListFooter';
import EpisodeInfoBottomSection from '../episodeinfo/EpisodeInfoBottomSection';

interface EpisodeMiddleSectionProps {
    episodeData: WebToonListDataType;
}

export default function EpisodeMiddleSection({ episodeData }: EpisodeMiddleSectionProps) {

    console.log(episodeData);
    return (
        <>
            <section className={style.EpisodeMiddleSection}>
                <EpisodelistBox episodeData={episodeData} />
            </section>
            <EpisodeListFooter />
        </>
    );
};
