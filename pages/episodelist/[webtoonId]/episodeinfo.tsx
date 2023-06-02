import { NextPageWithLayout } from "@/pages/_app"
import EpisodeInfoTopSection from "@/components/pages/episodeinfo/EpisodeInfoTopSection"
import EpisodeInfoBottomSection from "@/components/pages/episodeinfo/EpisodeInfoBottomSection"
import EpisodeInfoLayout from "@/components/layouts/episodeheader/EpisodeInfoLayout";
import { EpisodeViewListType } from "@/types/webtoonDataType";
import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface EpisodeListProps {
    webtoonId: number;
}

const EpisodeInfo: NextPageWithLayout<EpisodeListProps> = ({ webtoonId }) => {
    console.log(webtoonId);

    const { data: session } = useSession();
    const sort = 'DESC';
    const [episodeData, setEpisodeData] = useState<EpisodeViewListType>({
        episodeId: 0,
        episodeTitle: '',
        episodeThumbnail: '',
        episodeNumber: 0,
        uploadDate: '',
        totalScore: 0,
        authorWords: '',
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
                const episodeData: EpisodeViewListType = response.data.data;
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
            <EpisodeInfoTopSection />
            <EpisodeInfoBottomSection webtoonId={webtoonId} />
        </>
    )
}

EpisodeInfo.getLayout = function getLayout(EpisodeInfo: React.ReactElement) {
    return (
        <EpisodeInfoLayout>
            {EpisodeInfo}
        </EpisodeInfoLayout>
    )
}

export default EpisodeInfo

export async function getServerSideProps(context: Params) {
    const { webtoonId } = context.query;

    console.log(webtoonId);

    return {
        props: {
            webtoonId,
        },
    };
}