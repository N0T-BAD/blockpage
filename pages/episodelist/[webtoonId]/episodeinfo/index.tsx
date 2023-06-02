import { NextPageWithLayout } from "@/pages/_app"
import EpisodeInfoTopSection from "@/components/pages/episodeinfo/EpisodeInfoTopSection"
import EpisodeInfoBottomSection from "@/components/pages/episodeinfo/EpisodeInfoBottomSection"
import TotalLayout from "@/components/layouts/TotalLayout"
import { useEffect, useState } from "react";
import axios from "axios";
import { EpisodeViewListType, WebToonListDataType } from "@/types/webtoonDataType";
import { useSession } from "next-auth/react";

interface EpisodeListProps {
    webtoonId: number;
}

const EpisodeInfo: NextPageWithLayout<EpisodeListProps> = ({ webtoonId }) => {

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
            <EpisodeInfoBottomSection episodeData={episodeData} webtoonId={webtoonId} />
        </>
    )
}

EpisodeInfo.getLayout = function getLayout(EpisodeInfo: React.ReactElement) {
    return (
        <TotalLayout>
            {EpisodeInfo}
        </TotalLayout>
    )
}

export default EpisodeInfo

export async function getServerSideProps({ query }: any) {
    const webtoonId = parseInt(query.webtoonId as string);

    return {
        props: {
            webtoonId,
        },
    };
}