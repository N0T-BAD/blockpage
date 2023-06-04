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

    return (
        <>
            <EpisodeInfoTopSection />
            <EpisodeInfoBottomSection />
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