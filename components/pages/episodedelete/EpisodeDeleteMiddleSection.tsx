import React, { useEffect, useState } from 'react'
import style from '@/components/pages/episodedelete/EpisodeDeleteMiddleSection.module.css'
import EpisodeDeleteInfo from '@/components/pages/episodedelete/EpisodeDeleteInfo'
import { useRouter } from 'next/router';
import { EpisodeListDataType } from '@/types/webtoonDataType';
import axios from 'axios';
import { episodeData, episodeDeleteDataType } from '@/types/episodeDeleteDataType';

export default function EpisodeDeleteMiddleSection() {

    const router = useRouter();

    const [episodeData, setEpisodeData] = useState<episodeData>();

    useEffect(() => {
        const getFetch = async () => {
            const res = await axios.get("`${baseUrl}/api/v1/episode/get/${query.episodeId}`")
            console.log(res.data)
            setEpisodeData(res.data.data)
        }

        getFetch()
    }, [])

    return (
        <>
            {episodeData && (
                <>
                    <section className={style.EpisodeDeleteMiddleSection}>
                        <EpisodeDeleteInfo />
                    </section>
                </>
            )
            }
        </>
    )
}
