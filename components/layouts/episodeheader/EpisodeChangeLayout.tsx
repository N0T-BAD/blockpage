import EpisodeChangeHeader from "./EpisodeChangeHeader";

export default function EpisodeChangeLayout(props: { children: React.ReactNode }) {

    return (
        <>
            <EpisodeChangeHeader />
            <div>{props.children}</div>
        </>
    )
}