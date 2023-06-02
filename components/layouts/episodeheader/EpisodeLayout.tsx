import EpisodeHeader from "./EpisodeHeader";


export default function EpisodeLayout(props: { children: React.ReactNode }) {

    return (
        <>
            <EpisodeHeader />
            <div>{props.children}</div>
        </>
    )
}