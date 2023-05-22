import TotalHeader from "@/components/layouts/header/TotalHeader"
import { useRouter } from "next/router";
import EpisodeListFooter from "./episodelistfooter/episodelistfooter";

export default function TotalLayout(props: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <>
            <TotalHeader />
            <div>{props.children}</div>
            {
                router.pathname === '/episodelist' ?
                    <EpisodeListFooter />
                    : ""
            }
        </>
    )
}