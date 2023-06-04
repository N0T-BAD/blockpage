import React from 'react';
import style from '@/components/pages/episodelist/EpisodeMiddleSection.module.css';
import EpisodelistBox from '@/components/pages/episodelist/EpisodelistBox';
import { WebToonListDataType } from '@/types/webtoonDataType';
import EpisodeListFooter from '@/components/layouts/episodelistfooter/EpisodeListFooter';

export default function EpisodeMiddleSection() {
    return (
        <>
            <section className={style.EpisodeMiddleSection}>
                <EpisodelistBox />
            </section>
            <EpisodeListFooter />
        </>
    );
};
