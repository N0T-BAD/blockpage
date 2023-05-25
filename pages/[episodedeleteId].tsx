import { NextPageWithLayout } from "@/pages/_app"
import EpisodeDeleteTopSection from "@/components/pages/episodedelete/EpisodeDeleteTopSection"
import TotalLayout from "@/components/layouts/TotalLayout"
import { useRouter } from "next/router"
import { episodeData } from "@/types/episodeDeleteDataType"
import { useEffect, useState } from "react"
import axios from "axios"
import EpisodeDeleteInfo from "@/components/pages/episodedelete/EpisodeDeleteInfo"
import style from "@/components/pages/episodedelete/EpisodeDeleteMiddleSection.module.css"

const EpisodeDelete: NextPageWithLayout = () => {

    const router = useRouter();

    const [episodeData, setEpisodeData] = useState<episodeData>();

    // useEffect(() => {
    //     const getFetch = async () => {
    //         const res = await axios.get("`${baseUrl}/api/v1/episode/get/${query.episodeId}`")
    //         console.log(res.data)
    //         setEpisodeData(res.data.data)
    //     }

    //     getFetch()
    // }, [])

    return (
        <>
            <EpisodeDeleteTopSection />
            {episodeData && (
                <>
                    <section className={style.EpisodeDeleteMiddleSection}>
                        <EpisodeDeleteInfo episodeData={episodeData} />
                    </section>
                </>
            )
            }
        </>
    )
}

EpisodeDelete.getLayout = function getLayout(EpisodeDelete: React.ReactElement) {
    return (
        <TotalLayout>
            {EpisodeDelete}
        </TotalLayout>
    )
}

export default EpisodeDelete

